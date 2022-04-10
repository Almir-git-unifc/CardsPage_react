import './v15_f9-r14_ed25_App.css'
import React from 'react'


import './components/layout/v16_f7-r15_ed26_Card.css'
import Primeiro from './components/v04_f3-r04_ed05_Primeiro.jsx'
import ComParametro from './components/v06_f4-r06_ed07_ComParametro.jsx'
import ComFilhos from './components/v07_f5-r07_ed10_ComFilhos.jsx'
import Card from './components/layout/v10_f6-r10_ed16_Card.jsx'
import Repeticao from './components/v17_f11-r16_ed28_Repeticao'
import Condicional from './components/v19_f12-r18_ed34_Condicional.jsx'
import CondicionalComIf from './components/v20_f13-r19_ed37_CondicionalComIf'

export default props =>
    <div className="App">

        <Card titulo="#6 - título Card6: Condicional">
            <CondicionalComIf numero={11} />
        </Card>

        <Card titulo="#5 - título Card5: Condicional">
            <Condicional numero={10} />
        </Card>

        <Card titulo="#4 - título Card4: Repetição">
            <Repeticao />
        </Card>

        <Card titulo="#3 - tít Card1: Comp. ComFilhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#2 - tít Card2: ComParametro">
            <ComParametro titulo="Esse é o título do Comparametro 10"
                subtitulo="Esse é o subtitulo" />
        </Card>

        <Card titulo="#1 - tít Card3: Primeiro Compo">
            <Primeiro />
        </Card>
    </div>