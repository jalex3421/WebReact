import React from "react";
import '../styleSheets/About.css';
import { MovingComponent} from "react-moving-text";

function About(){
    return( 
        <div className='aboutContainer'> 
            <MovingComponent
                type="fadeInFromLeft"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p>WordsIsAllYouNeed is a service carefully created by 
                    Iñaki Luque Pastor and Alejandro Meza Tudela.</p> 
                <p>Because we are passionate about the world of NLP, we have 
                    thought about facilitating the daily life of the people 
                    around us.</p>
                <p> In order to achieve this, we offer three different 
                    services, such as: the possibility of translating text,
                Q&A, and even having some fun talking 
                to a bot.</p> 
                <p> We sincerely hope that you like the web, and that you 
                    give us the necessary support :)</p>     

                <div className="imageContainer">
                    <img src={require('../images/words.jpg')}
                    width="550"
                    height="450"
                    alt="words" />
                </div>
            </MovingComponent>

        </div>
        
    );
}

//this is important in order to use the component outhere...
export default About;