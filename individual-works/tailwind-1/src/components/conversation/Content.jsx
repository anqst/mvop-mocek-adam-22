import ChatBubble from "./ChatBubble";

function Content(props) {

    return (
        <div className="content h-screen max-h-full bg-neutral-600 flex flex-col col-nowrap p-12 pr-14 gap-16 overflow-y-scroll scroll-smooth">
            {
                props.messages.map(function (message) {

                    return (
                        <ChatBubble comesFromMe={message.comesFromMe} content={message.content} />
                    )
                })
            }
        </div>
    )
}

export default Content;