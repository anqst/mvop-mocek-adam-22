function Item(props) {

    let flexDirection;
    props.imageDirection == "horizontal" ? flexDirection = "row" : flexDirection = "col";

    return (
        <div className={`flex flex-${flexDirection} gap-5`}>
            <div className="flex flex-col gap-5">
                <div className="w-16 h-16 bg-rose-600 rounded-3xl"></div>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-bold capitalize text-lg">{props.heading}</h5>
                <p className="text-base [line-height:1.85]">{props.content}</p>
            </div>
        </div>
    )
}

export default Item;