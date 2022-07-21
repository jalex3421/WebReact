import React from "react";
import '../styleSheets/Card.css';

function Card(props){
    return( 
        <div className="card">
            <img 
            className="cardImage"
            src={require(`../images/${props.image}.png`)}
            alt={props.image}
            />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.bio}</p>
                <p><a href={props.linkedin} className="link">Linkedin</a></p>
            </div>
        </div>
    );
}

export default Card;