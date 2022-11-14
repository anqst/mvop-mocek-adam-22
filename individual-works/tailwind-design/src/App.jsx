import Header from "./components/Header"
import Welcome from "./components/Welcome"
import ItemBox from "./components/ItemBox"
import ImageSlide from "./components/ImageSlide"

function App() {

  return (
    <div className="bg-white w-9/12 flex flex-col m-auto pt-4 pb-28 gap-16 xl:gap-32">
      <Header />
      <Welcome />
      <ItemBox
        preHeading="Whats the function"
        heading="Meet the feature of product"
        headingAlign="center"
        columns={4}
        items={
          [
            {
              "heading": "fast performance",
              "content": "Get your blood tests delivered at home collect a sample from the your blood tests (?).",
              "image": "/...src",
              "imageDirection": "vertical"
            },
            {
              "heading": "partnership deal",
              "content": "Get your blood tests delivered at home collect a sample from the your blood tests (?).",
              "image": "/...src",
              "imageDirection": "vertical"
            },
            {
              "heading": "pro subscription",
              "content": "Get your blood tests delivered at home collect a sample from the your blood tests (?).",
              "image": "/...src",
              "imageDirection": "vertical"
            },
            {
              "heading": "customer support",
              "content": "Get your blood tests delivered at home collect a sample from the your blood tests (?).",
              "image": "/...src",
              "imageDirection": "vertical"
            },
          ]
        }
      />
      <ImageSlide
        image="/images/woman.png"
        imageAlt="WOMAN"
        imagePosition="left"
        preHeading="our services"
        heading="Business Goals Achieved with Design"
        headingBigger={true}
        columns={1}
        items={
          [
            {
              "heading": "smart features",
              "content": "Get your blood tests delivered as fast as possible lorem ipsum and all that, idk what else you want so i guess i don't.",
              "image": "/...src",
              "imageDirection": "horizontal"
            },
            {
              "heading": "secure content",
              "content": "Get your blood tests delivered as fast as possible lorem ipsum and all that, idk what else you want so i guess i don't.",
              "image": "/...src",
              "imageDirection": "horizontal"
            },
          ]
        }
      />
      <ItemBox
        preHeading="quality features"
        heading="Amazing useful features"
        headingAlign="center"
        columns={2}
        items={
          [
            {
              "heading": "fast performance",
              "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam culpa, quod aut blanditiis illo, optio eos ipsa voluptatibus maxime aperiam fugit iste. Cupiditate quaerat eaque vitae quas similique fugit.",
              "image": "/...src",
              "imageDirection": "horizontal"
            },
            {
              "heading": "partnership deal",
              "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam culpa, quod aut blanditiis illo, optio eos ipsa voluptatibus maxime aperiam fugit iste. Cupiditate quaerat eaque vitae quas similique fugit.",
              "image": "/...src",
              "imageDirection": "horizontal"
            },
            {
              "heading": "pro subscription",
              "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam culpa, quod aut blanditiis illo, optio eos ipsa voluptatibus maxime aperiam fugit iste. Cupiditate quaerat eaque vitae quas similique fugit.",
              "image": "/...src",
              "imageDirection": "horizontal"
            },
            {
              "heading": "customer support",
              "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam culpa, quod aut blanditiis illo, optio eos ipsa voluptatibus maxime aperiam fugit iste. Cupiditate quaerat eaque vitae quas similique fugit.",
              "image": "/...src",
              "imageDirection": "horizontal"
            },
          ]
        }
      />
    </div>
  )
}

export default App
