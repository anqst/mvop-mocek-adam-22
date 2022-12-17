import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {

  const [posts, setPosts] = useState([]);
  const [randomPost, setRandomPost] = useState(null);
  const [isPost, setIsPost] = useState(false);

  async function getPosts() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await data.json();
    setPosts(json);
  }

  function getRandomPost() {
    if (posts.length > 0) {
      setRandomPost(posts[Math.floor(posts.length * Math.random())]);
    } else {
      setRandomPost(null);
    }
  }

  useEffect(() => {
    getPosts();
  }, []) // spustí se jednou po vyrendrování

  useEffect(() => {
    console.log(posts);
    getRandomPost();
  }, [posts]) // spustí se po každé změně posts

  return (
    <div className="w-full h-screen py-20">

      <div className="flex flex-col items-center justify-start gap-20 m-auto w-[500px]">
        <div className="flex flex-row justify-between w-full">
          <button type="button" onClick={() => getRandomPost()} className="bg-yellow-300 hover:bg-yellow-400 px-8 py-4 rounded-xl">New random post</button>
          <button type="button" onClick={() => setIsPost((p) => !p)} className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl">Show/hide post</button>
        </div>
        {isPost === true ? (randomPost !== null ? <Post title={randomPost.title + "."} body={randomPost.body + "."} /> : <Post title={"Loading..."} />) : <Post title={"Click the blue button to show the post."} />}
      </div>
    </div>
  )
}

export default App
