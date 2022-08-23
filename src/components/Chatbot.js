import React,{useState} from "react";
import '../styleSheets/ChatBot.css';
import ChatForm from "./ChatForm";
import Message from "./Message";

function ChatBot(){
    const [messages, setMessages] = useState([]);
    const addMessages = async(message) => {
        if(message.trim()) {
            message = "Me: "+message.trim();
            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
                apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman:"+message+"\n",
                temperature: 0.9,
                max_tokens: 150,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0.6,
                stop: [" Human:", " AI:"],
            });
            const resp = response.data.choices[0].text
            const aux = [message, resp]
            const updatedMessages = [...messages,...aux];
            setMessages(updatedMessages);
    
        }
    };

    return(
        <>  
            <ChatForm onSubmit= {addMessages}/>
            <div className="chat">
                {
                    messages.map( (msg) =>
                        <Message message = {msg} />
         
                    )
                }
            </div>
        </>
    );
}

export default ChatBot;