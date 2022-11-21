import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {

  const [visible, setVisibility] = useState(true);

  return (
    <div className="bg-white">
      <div className="flex flex-col w-[40%] m-auto gap-4 py-12 items-center">
        <button className="bg-orange-400 w-full p-2"
          type="button"
          onClick={function () { setVisibility(!visible) }}
        >
          Toggle visibility
        </button>
        <div className={`bg-slate-400 w-full h-[5rem] ${visible === true ? "" : "hidden"}`}>

        </div>
      </div>
    </div>
  )
}

export default App
