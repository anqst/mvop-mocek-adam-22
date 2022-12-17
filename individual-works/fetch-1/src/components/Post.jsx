import { useEffect } from "react";

function Post(props) {

    useEffect(() => {
        console.log("Komponenta načtena.");
        return () => {
            console.log("Komponenta odebrána.");
        }
    }, []);

    return (
        <div className="p-10 shadow-2xl bg-white text-black flex flex-col items-center gap-8 w-full">
            <div className="text-center text-lg text-green-600">{props.title}</div>
            {props.body === undefined ? null : <div className="text-center"> <q>{props.body}</q></div>}
        </div>
    );
}

export default Post;