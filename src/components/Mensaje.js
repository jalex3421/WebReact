import React from "react";
import '../styleSheets/Mensaje.css';
function Mensaje(props){
    return(
        <div className="mensaje">
            <div className="mensaje-texto">
                {props.mensaje}
            </div>
        </div>
    
    );
}
export default Mensaje;