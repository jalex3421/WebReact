import React from "react";
import '../styleSheets/Contact.css';
import Card from './Card';

function Contact(){
    return( 
        <div className="sections">
          < Card
            image='Alejandro' 
            name='Alejandro Meza Tudela'
            bio="I'm very passionate in AI and Software development!!
            Also I’m very passionate about learning different languages. Currently leaning Japanese." 
            linkedin="https://www.linkedin.com/in/alejandro-meza-tudela/"
          />
        </div>
    );
}

//this is important in order to use the component outhere...
export default Contact;