import Item from "./Item";

function ItemBox(props) {

    return (
        <div className="flex flex-col gap-16 items-center">
            <div className="flex flex-col gap-4 items-center">
                <h3 className="uppercase text-rose-600 font-bold">{props.preHeading}</h3>
                <h2 className="text-3xl font-bold">{props.heading}</h2>
            </div>
            <div className={`grid grid-cols-${props.columns} gap-24`}>
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