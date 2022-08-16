import React, {useState} from "react";
import '../styleSheets/ChatFormulario.css'

function ChatFormulario(props){
    const [input,setInput] = useState('');
    const manejarCambio = e =>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        props.onSubmit(input);
      }

    return(
        <form className="chat-formulario"
              onSubmit={manejarEnvio}>
            <input
            className="chat-input"
            type="text"
            placeholder="Write a message..."
            name="texto"
            onChange={manejarCambio}
            />
            <button className="chat-boton">
            send message
            </button>
        </form>
    );
}

export default ChatFormulario;