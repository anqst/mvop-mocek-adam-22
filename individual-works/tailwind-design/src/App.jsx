import Header from "./components/Header"
import Welcome from "./components/Welcome"
import ItemBox from "./components/ItemBox"

function App() {

  return (
    <div className="bg-white w-9/12 flex flex-col m-auto py-4 gap-32">
      <Header />
      <Welcome />
      <ItemBox
        preHeading="Whats the function"
        heading="Meet the feature of product"
        columns={4}
        wrapImage={false}
        items={
          [
            {
              "heading": "fast performance",
              "content": "Get your blood tests delivered as fast as possible lorem ipsum and all that.",
              "image": "/...src",
            },
            {
              "heading": "fast performance",
              "content": "Get your blood tests delivered...",
              "image": "/...src",
            },
            {
              "heading": "fast performance",
              "content": "Get your blood tests delivered...",
              "image": "/...src",
            },
            {
              "heading": "fast performance",
              "content": "Get your blood tests delivered...",
              "image": "/...src",
            },
          ]
        }
      />
    </div>
  )
}

export default App
