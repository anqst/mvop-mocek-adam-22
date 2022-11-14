import Item from "./Item";

function ItemBox(props) {

    const columnsCount = {
        "1": "xl:grid-cols-1",
        "2": "xl:grid-cols-2",
        "4": "xl:grid-cols-4",
    }

    let cols = columnsCount[props.columns.toString()];

    let headingAlign = "xl:items-center";
    let textAlign = "xl:text-center";

    if (props.headingAlign === "right") {

        headingAlign = "xl:items-start";
        textAlign = "xl:text-start";

    } else if (props.headingAlign === "left") {

        headingAlign = "xl:items-end";
        textAlign = "xl:text-end";
    }

    return (
        <div className={`flex flex-col gap-16 ${headingAlign}`}>
            <div className={`flex flex-col gap-2 w-full items-center ${headingAlign}`}>
                <h3 className={`uppercase text-center text-rose-600 font-bold max-w-[80%] ${textAlign}`}>{props.preHeading}</h3>
                <h2 className={`font-bold text-center text-xl md:max-w-[80%] ${textAlign} ${props.headingBigger == true ? "md:text-5xl" : "md:text-4xl"}`}>{props.heading}</h2>
            </div>
            <div className={`grid grid-cols-1 ${cols} gap-x-20 gap-y-10`}>
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