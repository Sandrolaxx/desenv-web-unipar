import { Footer, Header } from "./Header";

export default function App() {
    const texto = "Show!";
    
    return (
        <div>
            <Header titulo="Cabeçalho" />
            <Header titulo="Outro bloco" />
            <Footer />
            <h1>Teste {texto}</h1>
        </div>
    )
}