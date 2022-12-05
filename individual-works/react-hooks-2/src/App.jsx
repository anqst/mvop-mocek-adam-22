import Item from "./components/Item"
import { useState } from "react"

function App2() {

    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1);
    }

    function remove() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="w-[80%] flex flex-col items-center m-auto gap-12 py-10">
            <h1 className="text-2xl">React - Dynamické komponenty</h1>
            <div className="flex flex-row items-center gap-10">
                <button type="button" className="btn btn-1" onClick={() => add()}>Přidat</button>
                <button type="button" className="btn btn-2" onClick={() => remove()}>Odebrat</button>
            </div>
            {count !== 0 ?
                <div className="grid grid-cols-4 gap-16">
                    {[...Array(count)].map((e, i) => {
                        return <Item count={i + 1} />
                    })}
                </div>
                :
                <div className="mt-16"><p className="text-xl p-8 rounded-md bg-yellow-300">Vložte komponentu kliknutím na tlačítko "Přidat".</p></div>
            }
        </div>
    )
}

export default App2
