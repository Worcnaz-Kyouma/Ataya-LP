import "./Home.css"

export default function Home() {
    return <div className="home">
        <header className="home-header">
            <img className="logo" src="/logo.png" alt="Hassan Ataya Odontologia" />
            <nav><ul>
                <li>Quem somos</li>
                <li>Transformação</li>
                <li>Tratamentos</li>
                <li>Nossa localização</li>
                <li>Fale conosco</li>
            </ul></nav>
        </header>
        <div className="home-body">
            <div></div> {/*arrow?*/}
            <div className="home-content">
                <p className="content-header">Sorriso radiante, vida transformada</p>
                <p className="content-data">Descubra a odontologia do futuro e conquiste o sorriso dos seus sonhos</p>
                <button className="content-button main-button">Conheça nosso trabalho!</button>
            </div>
            <div></div> {/*arrow?*/}
        </div>
    </div>
}