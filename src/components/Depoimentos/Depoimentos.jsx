import Title from "./../Title/Title"
import Depoimento from "../Depoimento/Depoimento"

import "./Depoimentos.css"

export default function Depoimentos() {
    return <div className="depoimentos">
        <Title className="title">Depoimentos</Title>
        <content>
            <div className="dentada-wrapper">
                <img src="/dentada.png" alt="Grandes resultados!" />
            </div>
            <div className="depoimentos-clientes">
                <Depoimento name="Jose" depoimento="Atendimento nota 10, desde a recepção até o tratamento. Parabéns a toda equipe, pelo profissionalismo e carinho que tratam os clientes!"/>
                <Depoimento name="Maria" depoimento="Atendimento nota 10, desde a recepção até o tratamento. Parabéns a toda equipe, pelo profissionalismo e carinho que tratam os clientes!"/>
            </div>
        </content>
        <Depoimento model="alternate" name="Joe Doe" depoimento="Atendimento nota 10, desde a recepção até o tratamento. Parabéns a toda equipe, pelo profissionalismo e carinho que tratam os clientes!"/>
    </div>
}