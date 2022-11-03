function ChatBubble(props) {

    if (props.comesFromMe == true) {

        return (
            <div className="p-2 px-3 text-base bg-green-500 text-white w-fit max-w-sm rounded-lg self-end">{props.content}</div>
        );

    } else {

        return (
            <div className="p-2 px-3 text-base bg-neutral-300 text-black w-fit max-w-sm rounded-lg">{props.content}</div>
        );
    }
}

export default ChatBubble;