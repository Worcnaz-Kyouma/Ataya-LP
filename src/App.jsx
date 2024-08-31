import Home from './components/Home/Home'
import Apresentacao from './components/Apresentacao/Apresentacao'
import Depoimentos from './components/Depoimentos/Depoimentos'
import Tratamentos from './components/Tratamentos/Tratamentos'

import './App.css'

export default function App() {
    return <>
        <Home/>
        <Apresentacao/>
        <Depoimentos/>
        <Tratamentos/>
        {/*<div>
            <Localizacao/>
            <Contatos/>
        </div>*/}
    </>
}