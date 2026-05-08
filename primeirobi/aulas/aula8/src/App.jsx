import { useState } from "react";
import ProductCard from "./ProductCard";

export default function App() {
    const [contador, setContador] = useState(0);
    const listaProdutos = [
        { id: 1, nome: "Teclado Razer", valor: 452.90 },
        { id: 2, nome: "Mouse Corsair", valor: 210.58 },
        { id: 3, nome: "PC Gamer", valor: 3300.00 },
        { id: 4, nome: "Teclado Multilaser", valor: 950.00 },
        { id: 5, nome: "PC da Positivo", valor: 1950.00 },
    ]

    function incrementar() {
        //paralelo
        setContador(contador + 1);
    }

    return (
        <div className="container">
            <h1>Contador</h1>
            <h3>{contador}</h3>
            <button onClick={incrementar}>
                Incrementar
            </button>
            <hr />
            <section>
                <h4>Lista de produtos</h4>
                {listaProdutos
                    .map(produto => <ProductCard key={produto.id} produto={produto} />)}
            </section>
        </div>
    );
}