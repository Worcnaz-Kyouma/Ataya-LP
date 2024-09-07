import Title from "../Title/Title"
import "./Footer.css"

export default function Footer() {
    return <footer id="footer">
        <Title>Nossa localização</Title>
        <content>
            <img src="localizacao.png" alt="R. Guaíra, 3439 - Centro, Guarapuava - PR, 85010-010" className="localizacao"/>
            <div className="footer-data">
                <div className="footer-info">
                    <div className="logo-wrapper">
                        <img src="logo-icon.png" alt="Ataya Hassan" className="icon" />
                        <img src="logo-text.png" alt="Ataya Hassan" className="text" />
                    </div>
                    <span className="info">
                        <img src="icon/local.png" alt="pin" />
                        <p>R. Guaíra, 3439 - Centro, Guarapuava - PR, 85010-010</p>
                    </span>
                    <span className="info">
                        <img src="icon/instagram.png" alt="instagram" />
                        <p>@drhassanataya</p>
                    </span>
                    <span className="info">
                        <img src="icon/whatsapp.png" alt="whatsapp" />
                        <p>+55 42 8831-2411</p>
                    </span>
                    <a href="https://wa.me/5542988312411" target="_blank"><button className="main-button consult-btn">Marque uma consulta</button></a>
                </div>
                <span className="creditos">Feito com &#9829; por @prado-worc & Gustavo Ott</span>
            </div>
        </content>
    </footer>
}