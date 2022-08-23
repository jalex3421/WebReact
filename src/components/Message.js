import React from "react";
import '../styleSheets/Message.css';
function Message(props){
    return(
        <div className="mensaje">
            <div className="mensaje-texto">
                {props.message}
            </div>
        </div>
    
    );
}
export default Message;