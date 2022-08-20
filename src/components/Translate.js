import React,{useState} from "react";
import '../styleSheets/Translate.css';
import TranslateForm from "./TranslateForm";
import Mensaje from "./Mensaje";

function Translate(){
    const [mensajes, setMensajes] = useState([]);
    const agregarMensaje = async(mensaje, idioma) => {
        console.log(mensaje)
        if(mensaje.trim()) {
            mensaje = mensaje.trim();
            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
                apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: "Translate this into"+idioma+":\n\n"+mensaje+"\n\n",
                temperature: 0.3,
                max_tokens: 100,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
              });
            console.log(response);
            const resp = response.data.choices[0].text
            const aux = [mensaje, resp]
            const mensajesActualizados = [...mensajes,...aux];
            setMensajes(mensajesActualizados);
        }
    };

    return(
        <>  <TranslateForm onSubmit= {agregarMensaje}/>
            <div type="text" className="translator">
                {
                    mensajes.map( (msg) =>
                        <Mensaje mensaje = {msg} />
                            
                    )
                }
            </div>
        </>
    );
}

export default Translate;