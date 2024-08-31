import "./Depoimento.css"

export default function Depoimento({
    name,
    depoimento
}) {
    return <div className="depoimento-cliente">
        <span className="depoimento-nome">{name}</span>
        <p><span className="depoimento-text">"{depoimento}"</span></p>
    </div>
}