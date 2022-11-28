import { useEffect, useState } from 'react'

function App() {
  const [points, setPoints] = useState(0)
  const [name, setName] = useState(null)

  async function delayPromise(duration) {

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, duration)
    });
  }

  async function getRandomUsername() {

    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await data.json();
    const username = jsonData[Math.floor(Math.random() * jsonData.length)].name;

    // delay to see the loading prompt
    await delayPromise(2000);
    setName(username);
  }

  // runs on first render.. i guess
  useEffect(() => {
    getRandomUsername();
  }, [])

  function handleOnClick(num) {
    setPoints((points) => points += num)
  }

  return (
    <div className='p-12 flex flex-col gap-8 items-start'>
      <p>I have made <span className='text-orange-600'>{points}</span> points. Excellent!</p>
      <button type='button' className='bg-slate-400 py-2 px-4 text-gray-900' onClick={() => handleOnClick(1)}>add point</button>
      <button type='button' className='bg-stone-500 py-2 px-4 text-gray-900' onClick={() => handleOnClick(-points)}>reset</button>
      <button type='button' className='bg-red-400 py-2 px-4 text-gray-900' onClick={() => handleOnClick(-1)}>remove point</button>
      <p>Random name: <span className='text-orange-600'>{name === null ? "loading..." : name}</span></p>
    </div>
  )
}

export default App
