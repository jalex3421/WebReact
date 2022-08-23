import React, {useState} from "react";
import '../styleSheets/TranslateForm.css'

function TranslateForm(props){
    
    const [input,setInput] = useState('');
    const [leng, setLeng] = useState('French')

    const handleChange = e =>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(input,leng);
      }

    const handleLenguage = e =>{
        console.log(e.target.value);
        setLeng(e.target.value);
        
    }
    
    return(
        
            <form className="translator-form"
                onSubmit={handleSubmit}>
                <input
                    className="translator-input"
                    type="text"
                    placeholder="Write a message..."
                    name="text"
                    onChange={handleChange}
                />
                <button className="translator-button">
                Send Message
                </button>
                <div className="lang-selector">
                    <select onChange={handleLenguage} >
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