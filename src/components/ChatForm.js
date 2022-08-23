import React, {useState} from "react";
import '../styleSheets/ChatForm.css'

function ChatFormulario(props){
    const [input,setInput] = useState('');
    const handleChange = e =>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(input);
      }

    return(
        <form className="chat-form"
              onSubmit={handleSubmit}>
            <input
            className="chat-input"
            type="text"
            placeholder="Write a message..."
            name="text"
            onChange={handleChange}
            />
            <button className="chat-button">
            send message
            </button>
        </form>
    );
}

export default ChatFormulario;