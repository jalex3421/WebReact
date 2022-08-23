import React from "react";
import '../styleSheets/Message.css';
function Message(props){
    return(
        <div className="message">
            <div className="message-text">
                {props.message}
            </div>
        </div>
    
    );
}
export default Message;