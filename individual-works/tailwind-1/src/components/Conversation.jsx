import Header from "./conversation/Header";
import Content from "./conversation/Content";
import Footer from "./conversation/Footer";

function Conversation(props) {
    return (
        <div className="bg-neutral-600 h-screen w-9/12 flex flex-col items-stretch">
            <Header username={props.username} />
            <Content messages={props.messages} />
            <Footer />
        </div>
    )
}

export default Conversation;