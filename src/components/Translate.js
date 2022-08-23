import React,{useState} from "react";
import '../styleSheets/Translate.css';
import TranslateForm from "./TranslateForm";
import Message from "./Message";

function Translate(){
    const [messages, setMessages] = useState([]);
    const addTranslation = async(message, lenguage) => {
        if(message.trim()) {
            message = message.trim();
            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
                apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: "Translate this into"+lenguage+":\n\n"+message+"\n\n",
                temperature: 0.3,
                max_tokens: 100,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
              });
            console.log(response);
            const resp = response.data.choices[0].text
            const aux = [message, resp]
            const updatedMessages = [...messages,...aux];
            setMessages(updatedMessages);
        }
    };

    return(
        <>  <TranslateForm onSubmit= {addTranslation}/>
            <div type="text" className="translator">
                {
                    messages.map( (msg) =>
                        <Message message = {msg} />
                            
                    )
                }
            </div>
        </>
    );
}

export default Translate;