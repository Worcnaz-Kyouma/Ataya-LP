import "./Tratamento.css"

export default function Tratamento({
    nome,
    iconeURL,
    children // text
}) {
    return <div className="tratamento-container">
        <img src={iconeURL} alt={nome} className="tratamento-icon" />
        <div className="tratamento-content">
            <h3 className="tratamento-title">{nome}</h3>
            <p className="tratamento-text">{children}</p>
        </div>
    </div>
}