import React from "react";
import '../styleSheets/About.css';

function About(){
    return( 
        <div className='aboutContainer'> 
            <p>WordsIsAllYouNeed is a service carefully created by 
                Iñaki Luque Pastor and Alejandro Meza Tudela.</p> 
            <p>Because we are passionate about the world of NLP, we have 
                thought about facilitating the daily life of the people 
                around us.</p>
            <p> In order to achieve this, we offer three different 
                services, such as: the possibility of translating text,
            correcting your documents, and even having some fun talking 
            to a bot.</p> 
            <p> We sincerely hope that you like the web, and that you 
                give us the necessary support :)</p> 

            <div className="imageContainer">
                <img src={require('../images/words.jpg')}
                   width="600"
                   height="500" />
            </div>

        </div>
        
    );
}

//this is important in order to use the component outhere...
export default About;