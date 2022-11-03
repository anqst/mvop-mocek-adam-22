function CardDynamic (props){

    return(

        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a target="_blank" href={props.link.address}>{props.link.name}</a>
        </div>
    );
}

export default CardDynamic;