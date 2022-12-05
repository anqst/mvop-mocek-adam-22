function Item(props) {

    return (
        <div className="bg-rose-400 flex flex-col items-center justify-center py-32 px-20 rounded-2xl">
            <p className="text-base">Item: {props.count}</p>
        </div>
    );
}

export default Item;