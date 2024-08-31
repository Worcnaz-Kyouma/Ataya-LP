import "./Depoimento.css"

export default function Depoimento({
    name,
    depoimento,
    model
}) {
    if(model == "alternate") {
        return <p><span className="depoimento-nome">{name} - </span><span className="depoimento-text">"{depoimento}"</span></p>
    }

    return <div className="depoimento-cliente">
        <span className="depoimento-nome">{name}</span>
        <p><span className="depoimento-text">"{depoimento}"</span></p>
    </div>
}