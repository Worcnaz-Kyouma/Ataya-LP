import Title from "./../Title/Title"
import Depoimento from "../Depoimento/Depoimento"

import "./Depoimentos.css"

export default function Depoimentos({ isMobile }) {

    if(isMobile)
        return <div id="depoimentos" className="depoimentos">
            <Title className="title">Depoimentos</Title>
            <div className="content">
                <div className="dentada-wrapper">
                    <img src="/dentada2.png" alt="Grandes resultados!" />
                </div>
            </div>
            <Depoimento model="alternate" name="Kauanna Prado" depoimento="Experiência incrível, atendimento totalmente diferenciado, top demais!! Dr Hassan super atencioso e ótimo profissional.. recomendo de olhos fechados - Via Google"/>
            <Depoimento model="alternate" name="Mayara Martini" depoimento="Sempre bem atendida, Dr Hassan profissional top, com uma equipe sempre atenciosa e preparada! - Via Google"/>
            <Depoimento model="alternate" name="Mari Gomes" depoimento="Excelente atendimento desde o primeiro contato via whats até o fechamento do tratamento, profissionais de alta qualidade, eu e toda minha família somos pacientes e recomendamos a Clínica Hassan Ataya Odontologia!! - Via Google"/>
        </div>

    return <div id="depoimentos" className="depoimentos">
        <Title className="title">Depoimentos</Title>
        <div className="content">
            <div className="dentada-wrapper">
                <img src="/dentada2.png" alt="Grandes resultados!" />
            </div>
            <div className="depoimentos-clientes">
                <Depoimento name="Kauanna Prado" depoimento="Experiência incrível, atendimento totalmente diferenciado, top demais!! Dr Hassan super atencioso e ótimo profissional.. recomendo de olhos fechados - Via Google"/>
                <Depoimento name="Mayara Martini" depoimento="Sempre bem atendida, Dr Hassan profissional top, com uma equipe sempre atenciosa e preparada! - Via Google"/>
            </div>
        </div>
        <Depoimento model="alternate" name="Mari Gomes" depoimento="Excelente atendimento desde o primeiro contato via whats até o fechamento do tratamento, profissionais de alta qualidade, eu e toda minha família somos pacientes e recomendamos a Clínica Hassan Ataya Odontologia!! - Via Google"/>
    </div>
}