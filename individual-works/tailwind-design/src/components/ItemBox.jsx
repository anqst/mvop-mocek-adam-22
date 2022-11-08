import Item from "./Item";

function ItemBox(props) {

    return (
        <div className="flex flex-col gap-12 items-center">
            <div className={`flex flex-col gap-2 items-center`}>
                <h3 className="uppercase text-rose-600 font-bold">{props.preHeading}</h3>
                <h2 className={`font-bold text-${props.headingBigger == true ? "5" : "3"}xl`}>{props.heading}</h2>
            </div>
            <div className={`grid grid-cols-${props.columns} gap-20`}>
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