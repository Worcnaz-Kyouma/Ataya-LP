import Title from "./../Title/Title"
import Tratamento from "./../Tratamento/Tratamento"

import "./Tratamentos.css"

export default function Tratamentos() {
    return <div id="tratamentos" className="tratamentos">
        <Title>Nossos tratamentos</Title>
        <div className="content">
            <Tratamento nome="Odontologia geral" iconeURL="./odontologia-geral.png">Responsável por cuidar da saúde bucal de forma completa e abrangente. Ele é o primeiro ponto de contato para a maioria das pessoas e atua na prevenção, diagnóstico e tratamento de diversas condições bucais.</Tratamento>
            <Tratamento nome="Facetas" iconeURL="./facetas.png">Facetas são finas lâminas de porcelana ou resina composta colocadas sobre a superfície frontal dos dentes utilizadas para melhorar a estética dental, corrigindo imperfeições como manchas, desgastes, desalinhamentos leves e espaçamentos. Somos especialistas em Lente de Contato dental / Facetas de Porcelana.</Tratamento>
            <Tratamento nome="Implantes" iconeURL="./implantes.png">O tratamento de implantes envolve a inserção cirúrgica de dispositivo osso maxilar ou mandibular, que servem como substitutos das raízes dentárias. Faça seu Implante Dental com um profissional especialista em Prótese Dental e Protocolos Dental.</Tratamento>
            <Tratamento nome="Aparelhos" iconeURL="./aparelhos.png">Aparelhos ortodônticos são utilizados para corrigir o alinhamento dos dentes e a mordida, melhorando tanto a estética quanto a função dental. Conheça todas os nossos tratamentos que incluem: Alinhadores Invisíveis, Aparelho Dental Fixo, Aparelho Dental Fixo e Aparelho Ortodôntico Auto ligado.</Tratamento>
        </div>
    </div>
}