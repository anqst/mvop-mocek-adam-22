function Item(props) {

    let flexDirection;
    props.imageDirection == "horizontal" ? flexDirection = "lg:flex-row" : flexDirection = "lg:flex-col";

    return (
        <div className={`flex flex-col items-center gap-x-8 gap-y-5 md:flex-row ${flexDirection} md:items-start`}>
            <div className="flex flex-col gap-5">
                <div className="bg-rose-600 w-12 h-12 rounded-2xl md:w-16 md:h-16  md:rounded-3xl"></div>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-start">
                <h5 className="font-bold capitalize text-md">{props.heading}</h5>
                <p className="text-base leading-loose text-center md:text-start">{props.content}</p>
            </div>
        </div>
    )
}

export default Item;