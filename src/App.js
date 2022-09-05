import './App.css';
import logo from './imagens/logo.png'
import Boton from './componentes/boton'
import Contador from './componentes/contador';
import { useState } from 'react'

function App() {
    const [numClics, setNumClics] = useState(0);


    const manejarClic = () => {
        setNumClics(numClics + 1);

    }
    const reiniciarContador = () => {
        setNumClics(0);
    }


    return ( <
        div className = "App" >

        <
        div className = 'losAndesLogoContenedor' >
        <
        img className = 'LosAndesLogo'
        src = { logo }
        alt = 'LogoLosAndes' / >
        <
        /div> <
        div className = 'contenerdorPrincipal' >
        <
        Contador numClics = { numClics }
        /> <
        Boton texto = 'Clic'
        esBotonclic = { true }
        manejarClic = { manejarClic }
        /> <
        Boton texto = 'Reiniciar'
        esBotonclic = { false }
        manejarClic = { reiniciarContador }
        /> <
        /div> <
        /div>
    );
}

export default App;