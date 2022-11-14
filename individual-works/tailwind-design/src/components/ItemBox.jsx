import Item from "./Item";

function ItemBox(props) {

    const columnsCount = {
        "1": "grid-cols-1",
        "2": "grid-cols-2",
        "4": "grid-cols-4",
    }

    let cols = columnsCount[props.columns.toString()];

    let headingAlign = "items-center";
    let textAlign = "text-center";

    if (props.headingAlign === "right") {

        headingAlign = "items-start";
        textAlign = "text-start";

    } else if (props.headingAlign === "left") {

        headingAlign = "items-end";
        textAlign = "text-end";
    }

    return (
        <div className={`flex flex-col gap-16 ${headingAlign}`}>
            <div className={`flex flex-col gap-2 w-full  ${headingAlign}`}>
                <h3 className={`uppercase text-rose-600 font-bold max-w-[80%] ${textAlign}`}>{props.preHeading}</h3>
                <h2 className={`font-bold max-w-[80%] ${textAlign} ${props.headingBigger == true ? "text-5xl" : "text-4xl"}`}>{props.heading}</h2>
            </div>
            <div className={`grid ${cols} gap-x-20 gap-y-10`}>
                {
                    props.items.map(function (item) {

                        return (<Item heading={item.heading} content={item.content} image={item.image} imageDirection={item.imageDirection} />);
                    })
                }
            </div>
        </div>
    )
}

export default ItemBox;