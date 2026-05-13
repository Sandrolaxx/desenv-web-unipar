import "./App.css"
import Header from "./components/Header";

export default function App() {
    const qtdPosts = 16;
    const possuiAssinatura = false;

    return (
        <main id="container">
            <Header 
                habilitado={possuiAssinatura} 
                quantidadePosts={qtdPosts} />
            <section>
                <h1>Nossos últimos posts</h1>
                <article>
                    <h1>Flamengo 2x1 Curintia</h1>
                    <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
                </article>
                <article>
                    <h1>Curintia 0x1 Indepiendente</h1>
                    <p>Depay melhor batedor de penalti do BR</p>
                </article>
                <article>
                    <h1>Flamengo 2x1 Curintia</h1>
                    <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
                </article>
                <article>
                    <h1>Flamengo 2x1 Curintia</h1>
                    <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
                </article>
                <article>
                    <h1>Flamengo 2x1 Curintia</h1>
                    <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
                </article>
                <article>
                    <h1>Flamengo 2x1 Curintia</h1>
                    <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
                </article>
                <article>
                    <h1>Santos kkk</h1>
                    <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
                </article>
                <article>
                    <h1>Torneiras 3 x 2 LDU</h1>
                    <p>Devin não conseguiu resolver</p>
                </article>
            </section>
        </main>
    )
}