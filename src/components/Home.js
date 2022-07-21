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
            image='chatbot'/>
          < UseCase
            nameUseCase='Translate'
            textUseCase='Tired of bad translations? Try translating
             your text into one of our available languages.'
            image='translation'/>  
          < UseCase
            nameUseCase='Text correction'
            textUseCase='Do you want to have a perfectly written text? 
            Try using the functionality we provide!'
            image='correction'/>
        </div>
    );
}

//this is important in order to use the component outhere...
export default Home;