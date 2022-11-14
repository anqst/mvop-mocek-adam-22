import ItemBox from "./ItemBox";

function ImageSlide(props) {

    const items = [];

    props.items.forEach(function (item) {

        items.push({
            "heading": item.heading,
            "content": item.content,
            "image": item.image,
            "imageDirection": item.imageDirection
        });
    })

    return (
        <div className={`flex flex-col ${props.imagePosition == "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-20 justify-between`}>
            <div className="flex flex-col justify-center">
                <img className="rounded-md drop-shadow-2xl w-[620px]" src={props.image} alt={props.imageAlt} />
            </div>
            <div className="max-w-[650px] pt-[3rem]">
                <ItemBox
                    preHeading={props.preHeading}
                    heading={props.heading}
                    headingBigger={props.headingBigger}
                    headingAlign={`${props.imagePosition == "right" ? "left" : "right"}`}
                    columns={props.columns}
                    items={items}
                />
            </div>
        </div>
    );
}

export default ImageSlide;