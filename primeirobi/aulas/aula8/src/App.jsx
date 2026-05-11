import { useState } from "react";

export default function App() {
    const [contador, setContador] = useState(0)
    const [listaProdutos, setListaProdutos] = useState([
        { id: 1, nome: "Teste 1", valor: 20.00 },
        { id: 2, nome: "Teste 2", valor: 22.00 },
        { id: 3, nome: "Teste 3", valor: 23.00 },
        { id: 4, nome: "Teste 4", valor: 24.00 },
        { id: 5, nome: "Teste 5", valor: 25.00 }
    ])
    const [produto, setProduto] = useState();
    const [valorProduto, setValorProduto] = useState(0.0);

    function incrementar() {
        setContador(contador + 1);
    }

    function adicionar() {
        console.log("ADICIONANDO PRODUTO")
        const novoProduto = {
            id: listaProdutos.length + 1,
            nome: produto,
            valor: valorProduto
        }

        setListaProdutos([...listaProdutos, novoProduto])
    }

    return (
        <main>
            <div>
                <h1>Contador</h1>
                <h3>{contador}</h3>
                <button onClick={incrementar}>
                    Incrementar
                </button>
                {listaProdutos &&
                    <div>
                        <h3>Lista de Compras</h3>
                        <ul>
                            {listaProdutos.map(item => (
                                <li key={item.id}>
                                    Nome: {item.nome} -
                                    Valor: {item.valor}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
                <br />
                <br />
                <label htmlFor="produto"></label>
                <input id="produto" type="text" value={produto}
                    onChange={e => setProduto(e.target.value)} />
                <br />
                {/* = > */}
                <input id="valor" type="text" value={valorProduto}
                    onChange={e => setValorProduto(e.target.value)} />
                    <br />
                <br />
                <button onClick={adicionar}>
                    Adicionar
                </button>
            </div>
        </main>
    )
}