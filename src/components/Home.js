import React from "react";
import UseCase from "./UseCase";
import '../styleSheets/Home.css';

function Home(){
    return( 
        <div className="sections">
          < UseCase
            nameUseCase='Chat bot'
            textUseCase='Try talking to our chatbot. Hopefully 
            it will give you a fun conversation!'
            image='chatbot'
            link="/chatbot"/>
          < UseCase
            nameUseCase='Translate'
            textUseCase='Tired of bad translations? Try translating
             your text into one of our available languages.'
            image='translation'
            link="/translate"/>  
          < UseCase
            nameUseCase='Q&A'
            textUseCase='Are there questions that have you intrigued? Here are the answers!!'
            image='response'
            link="/response"/>
        </div>
    );
}

//this is important in order to use the component outhere...
export default Home;