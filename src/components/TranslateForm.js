import React, {useState} from "react";
import '../styleSheets/TranslateForm.css'

function TranslateForm(props){
    
    const [input,setInput] = useState('');
    const [leng, setLeng] = useState('French')

    const manejarCambio = e =>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        props.onSubmit(input,leng);
      }

    const manejarIdioma = e =>{
        console.log(e.target.value);
        setLeng(e.target.value);
        
    }
    
    return(
        
            <form className="translator-form"
                onSubmit={manejarEnvio}>
                <input
                    className="translator-input"
                    type="text"
                    placeholder="Write a message..."
                    name="texto"
                    onChange={manejarCambio}
                />
                <button className="translator-boton">
                Send Message
                </button>
                <div className="lang-selector">
                    <select onChange={manejarIdioma} >
                        <option value="French">FRENCH</option>
                        <option value="Spanish">SPANISH</option>
                        <option value="English">ENGLISH</option>
                        <option value="Chinese">CHINESE</option>
                    </select>
                </div>
            </form>
       
    );
}

export default TranslateForm;