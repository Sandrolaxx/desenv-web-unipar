import { useState } from "react";

export default function App() {
    const [contador, setContador] = useState(10)
    
    function incrementar() {
        //processamento e regras
        setContador(contador + 1);//....
    }

    return (
        <div>
            <h1>Contador</h1>
            <h3>{contador}</h3>
            <button onClick={incrementar}>
                Incrementar
            </button>
        </div>
    )
}