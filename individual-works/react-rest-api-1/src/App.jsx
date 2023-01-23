import { useState, useEffect } from 'react'
import axios from 'axios'
import RouteItem from './components/RouteItem';

function App() {

  const itemsPerPage = 30;
  const [offset, setOffset] = useState(0);
  const [routeData, setRouteData] = useState(null);

  async function getRouteData() {

    setRouteData(null);

    const fetchedData = await axios({
      method: 'get',
      url: `https://api.golemio.cz/v2/gtfs/routes?limit=${itemsPerPage}&offset=${offset}`, // 
      headers: { "X-Access-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vY2VrLmFkLjIwMjBAc2tvbGEuc3Nwcy5jeiIsImlkIjoxMTUxLCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NzQ0NzUzNjYsImV4cCI6MTE2NzQ0NzUzNjYsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiI5YTUyMmEwYS1lNDVmLTQ1ODEtYmQxYi0wZTcwNzk1OTJjZDgifQ.yUTICROBjKGguzx74wS7BXtIgL-k9hpF1s9kLl-unKs" }
    });

    if (fetchedData) {
      setRouteData(fetchedData.data);
    }
  }

  useEffect(() => {
    getRouteData();
  }, []);

  useEffect(() => {

    console.log(offset);
    getRouteData();

  }, [offset])


  return (
    <div className='bg-gray-500 min-w-full min-h-screen'>
      <div className='py-12 flex flex-col items-center gap-24'>

        <div className='flex flex-row gap-12 justify-center'>
          <button className='btn text-black bg-blue-400 hover:bg-blue-600' onClick={() => { setOffset((off) => { let newOff = off - itemsPerPage >= 0 ? off - itemsPerPage : 0; return newOff }) }}>&lt;</button>
          <button className='btn text-black bg-green-400 hover:bg-green-600' onClick={() => getRouteData()}>Refresh</button>
          <div className='btn text-black bg-white'>{(offset / itemsPerPage) + 1}</div>
          <button className='btn text-black bg-blue-400 hover:bg-blue-600' onClick={() => { setOffset((off) => off + itemsPerPage) }}>&gt;</button>
        </div>

        {(routeData === null ?
          <div>Loading..</div> :
          <div className='px-12 grid grid-cols-3 gap-8'>
            {routeData.map((e, i) => {
              return <RouteItem data={e} />
            })}
          </div>)}
      </div>
    </div>
  )
}

export default App
