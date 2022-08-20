import React,{useState} from "react";
import '../styleSheets/ChatBot.css';
import ChatFormulario from "./ChatFormulario";
import Mensaje from "./Mensaje";

function ChatBot(){
    const [mensajes, setMensajes] = useState([]);
    const agregarMensaje = async(mensaje) => {
        console.log(mensaje)
        if(mensaje.trim()) {
            mensaje = "Me: "+mensaje.trim();
            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
                apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman:"+mensaje+"\n",
                temperature: 0.9,
                max_tokens: 150,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0.6,
                stop: [" Human:", " AI:"],
            });
            //const resp = "AI: "+ response.data.choices[0].text.split(":")[1]
            const resp = response.data.choices[0].text
            const aux = [mensaje, resp]
            const mensajesActualizados = [...mensajes,...aux];
            setMensajes(mensajesActualizados);
    
        }
    };

    return(
        <>  
            <ChatFormulario onSubmit= {agregarMensaje}/>
            <div className="chat">
                {
                    mensajes.map( (msg) =>
                        <Mensaje mensaje = {msg} />
         
                    )
                }
            </div>
        </>
    );
}

export default ChatBot;