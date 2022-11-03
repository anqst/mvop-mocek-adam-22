function ContentItem(props){

    console.log(props.image);

    return(
        <>
        <div className="content-item">
            <div className="img-container">
                <img src={props.image} alt="project logo" />
            </div>
            <div className="text-container">
                <div className="project-heading"><h3>{props.title}</h3></div>
                <div className="project-description"><p>{props.description}</p></div>
            </div>
        </div>
        </>
    );
}

export default ContentItem;