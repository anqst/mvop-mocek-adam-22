import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json()).then((json) => { setPosts(json); });
  }, []) // spustí se jednou po vyrendrování

  useEffect(() => {
    console.log(posts);
  }, [posts])// spustí se pokaždé, když se změní posts

  return (
    <div>
      {
        posts.map((item) => {
          return (<div>{item.title}</div>);
        })
      }
    </div>
  )
}

export default App
