import "./Home.css"

export default function Home() {
    return <div className="home">
        <header className="home-header">
            <img className="logo" src="./logo.png" alt="Hassan Ataya Odontologia" />
            <nav><ul>
                <li><a href="#apresentacao">Quem somos</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#tratamentos">Tratamentos</a></li>
                <li><a href="#footer">Nossa localização</a></li>
                <li><a href="#footer">Fale conosco</a></li>
            </ul></nav>
        </header>
        <div className="home-body">
            <div></div>
            <div className="home-content">
                <p className="content-header">Sorriso radiante, vida transformada</p>
                <p className="content-data">Descubra a odontologia do futuro e conquiste o sorriso dos seus sonhos</p>
                <a href="https://www.instagram.com/drhassanataya/" target="_blank"><button className="content-button main-button">Conheça nosso trabalho!</button></a>
            </div>
            <div></div>
        </div>
    </div>
}