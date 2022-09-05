import React from "react";
import '../imagens/HojasdeEstilo/contadorstilo.css'


function contador({numClics}){
    return(
        <div className="Contador">
            {numClics}
        </div>
    );
}
export default contador;