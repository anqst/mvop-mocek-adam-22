import Item from "./Item";

function ItemBox(props) {

    return (
        <div className={`flex flex-col gap-12 ${props.headingStart === true ? "items-start" : "items-center"}`}>
            <div className={`flex flex-col gap-2 w-full  ${props.headingStart === true ? "items-start" : "items-center"}`}>
                <h3 className="uppercase text-rose-600 font-bold max-w-[80%]">{props.preHeading}</h3>
                <h2 className={`font-bold max-w-[80%] ${props.headingBigger == true ? "text-5xl" : "text-4xl"}`}>{props.heading}</h2>
            </div>
            {/* PROBLÉM: NEFUNGUJE NASTAVENÍ GRID-COLS- DYNAMICKY (VIZ DALŠÍ ŘÁDEK) */}
            <div className={`grid grid-cols-${props.columns} gap-x-20 gap-y-10`}>
                {
                    /* https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html */

                    props.items.map(function (item) {

                        return (<Item heading={item.heading} content={item.content} image={item.image} wrapImage={props.wrapImage} />);
                    })
                }
            </div>
        </div>
    )
}

export default ItemBox;