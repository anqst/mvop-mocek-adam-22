function Item(props) {

    let flexDirection;
    props.wrapImage == true ? flexDirection = "row" : flexDirection = "col";

    return (
        <div className={`flex flex-${flexDirection} gap-8`}>
            <div className="flex flex-col gap-5">
                <div className="w-16 h-16 bg-rose-600 rounded-3xl"></div>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-bold capitalize">{props.heading}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Item;