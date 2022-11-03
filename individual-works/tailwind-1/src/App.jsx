import Sidebar from "./components/Sidebar";
import Conversation from "./components/Conversation";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row text-white">
      <Sidebar />
      <Conversation
        username="anqst"
        messages={
          [
            {
              "comesFromMe": false,
              "content": "hello there"
            },
            {
              "comesFromMe": true,
              "content": "why tho"
            },
            {
              "comesFromMe": false,
              "content": "how are you doing these days?"
            },
            {
              "comesFromMe": true,
              "content": "why tho"
            },
            {
              "comesFromMe": false,
              "content": "i just want to know ok please can you just reply to me thx"
            },
            {
              "comesFromMe": true,
              "content": "why tho"
            },
            {
              "comesFromMe": true,
              "content": "https://www.youtube.com/watch?v=1djkjZU76Jw"
            }
          ]
        }
      />
    </div>
  )
}

export default App
