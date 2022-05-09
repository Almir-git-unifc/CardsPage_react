import './App.css'
import React from 'react'


import './components/layout/Card.css'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import ComFilhos from './components/basicos/ComFilhos.jsx'
import Card from './components/layout/Card.jsx'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional.jsx'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/Comunicacao/Direta/Pai.jsx'

export default props =>
    <div className="App">

        <Card titulo="#7 - título: Comunicação Direta" color="#4298B5">
            <Pai Sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#6 - título Card6: Condicional" color="#FA6900">
            <CondicionalComIf numero={11} />
        </Card>

        <Card titulo="#5 - título Card5: Condicional" color="#E94CF6">
            <Condicional numero={10} />
        </Card>

        <Card titulo="#4 - título Card4: Repetição" color="#008BBA">
            <Repeticao />
        </Card>

        <Card titulo="#3 - tít Card1: Comp. ComFilhos" color="#D96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#2 - tít Card2: ComParametro" color="#FF85CB">
            <ComParametro titulo="Esse é o título do Comparametro 10"
                subtitulo="Esse é o subtitulo" />
        </Card>

        <Card titulo="#1 - tít Card3: Primeiro Compo" color="#92B06A">
            <Primeiro />
        </Card>
    </div>