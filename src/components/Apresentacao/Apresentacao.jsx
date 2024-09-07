import "./Apresentacao.css"

export default function Apresentacao() {
    return <div id="apresentacao" className="apresentacao">
        <div className="info">
            <h1 className="serial">CRO 15003-PR</h1>
            <h2 className="name">Dr. Hassan Ataya</h2>
            <p>Sempre tive o sonho de atuar na área da saúde e vi que na odontologia eu poderia realizar meu sonho.</p>
            <p>Nunca tive uma fonte de inspiração pois não tinha ninguém da minha família que fosse dentista sendo assim resolvi ser o primeiro.</p>
            <p className="quote">“Ser pioneiro é desafiador, mas ao mesmo tempo incrível”</p>
        </div>
        <div className="doctor-wrapper">
            <div className="golden-border"></div>
            <div className="doctor">
                <img src="/sigmahassan.png" alt="Dr. Hassan Ataya" />
            </div>
        </div>
    </div>
}