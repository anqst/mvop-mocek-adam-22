import ItemBox from "./ItemBox";

function ImageSlide(props){

    return(
        <div className="flex flex-row gap-20">
            <div>
                <img className="rounded-md drop-shadow-2xl" src={props.image} alt={props.imageAlt} />
            </div>
            <div>
            <ItemBox
                preHeading="our services"
                heading="Business goals achieved with design"
                headingBigger={true}
                headingStart={true}
                columns={1}
                wrapImage={true}
                items={
                    [
                        {
                        "heading": "smart features",
                        "content": "Get your blood tests delivered as fast as possible lorem ipsum and all that.",
                        "image": "/...src",
                        },
                        {
                        "heading": "secure content",
                        "content": "Get your blood tests delivered...",
                        "image": "/...src",
                        },
                    ]
                }
            />    
            </div>
        </div>
    );
}

export default ImageSlide;