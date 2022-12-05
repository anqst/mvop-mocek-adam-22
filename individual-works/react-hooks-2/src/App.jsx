import Item from "./components/Item"
import { useState, useEffect } from "react"

function App() {

  const [items, setItems] = useState([]);

  function add() {
    setItems((_items) => [..._items, _items.length + 1]);
  }

  function remove() {
    if (items.length > 0) {
      setItems((current) => current.filter((item) => item !== current.length));
    }
  }

  useEffect(() => {
    console.log("items have been changed to: ", items);
  }, [items]);


  return (
    <div className="w-[80%] flex flex-col items-center m-auto gap-12 py-10">
      <h1 className="text-2xl">React - Dynamické komponenty</h1>
      <div className="flex flex-row items-center gap-10">
        <button type="button" className="btn btn-1" onClick={() => add()}>Přidat</button>
        <button type="button" className="btn btn-2" onClick={() => remove()}>Odebrat</button>
      </div>
      <div className="grid grid-cols-4 gap-16">
        {items.map(item => {
          return (
            <Item count={item} />
          );
        })}
      </div>
    </div>
  )
}

export default App
