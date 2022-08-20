import React from "react";
import '../styleSheets/Contact.css';
import Card from './Card';

function Contact(){
    return( 
        <div className="sections">
          <div class="row">
            <div class="column">
              < Card
                image='Alejandro' 
                name='Alejandro Meza Tudela'
                bio="I am very passionate about AI and software development!!
                I also enjoy learning languages. Currently learning Japanese." 
                linkedin="https://www.linkedin.com/in/alejandro-meza-tudela/"
              />
            </div>
            <div class="column">
              < Card
                image='inakiluque' 
                name='Iñaki Luque Pastor'
                bio="I am a computer science student who wants to test my skills about my passion." 
                linkedin="https://www.linkedin.com/in/i%C3%B1aki-luque-pastor-7b015223a/"
              />
            </div>
          </div>
        </div>
    );
}

//this is important in order to use the component outhere...
export default Contact;