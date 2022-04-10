import './v13_f2-r12_ed22_index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './v20_f8-r19_ed39_App.jsx'

ReactDOM.render(
        <App></App>,
    document.getElementById('root'),



    /** Não pode mudar o nome do arquivo index.js colocando a versão, pois não roda... */
    /** Vr v01_f1-r01_ed01_index.js – só Olá react*/
    /** Vr v01_f1-r01_ed02_index.js – import css*/
    /** Vr v02_f1-r01_ed03_index.js – import component Primeiro.jsx e coloca <primeiro> dentro do render  */
    /** Vr v03_f1-r03_ed04_index.js – atualizar o CSS com font-weight: 300, refatora primeiro.jsx e o importa */
    /** Vr v05_f1-r05_ed06_index.js – import ComParametro.jsx e coloca <ComParametro> dentro de uma div */
    /** Vr v05_f1-r05_ed06_index.js – import ComParametro.jsx e coloca <ComParametro> dentro de uma div e passa parametros no ractDOM*/
    /** Vr v06_f1-r06_ed08_index.js – import ComParametro.jsx e colocamos apenas uma instancia de <ComParametro>  */
    /** Vr v06_f1-r06_ed08_index.js – import ComParametro.jsx e usamos duas instancia de <ComParametro>, mas poderia ser 3, 5, várias instancias de ComParametro  */
    /** Vr v07_f1-r07_ed13_index.js – Referencia objeto react e exibe uma lista UL com elementos  */
    /** Vr v08_f1-r08_ed14_index.js – Importa e Implementa Card.jsx com um título */
    /** Vr v09_f1-r08_ed14_index.js – editado Card.css v11 com Borda e Canto arredondado */
    /** Vr v10_f1-r09_ed18_index.js – Importa arquivo Card.css e o Card.jsx n.16 foi atualizado */
    /** Vr v11_f1-r10_ed19_index.js – editado Card.css v11 com Borda e Canto arredondado */
    /** Vr v12_f1-r11_ed20_index.js – Importa o Card.css v12; e edita-o com Footer e Conteudo: background-color e color */
    /** Vr v13_f1-r12_ed21_index.js – Importa o Componente Primeiro; Duplica o Card; e coloca <Primeiro> como conteudo do Card Primeiro Componente */
    /** Vr v14_f1-r13_ed24_index.js – Retira todos os componentes e importa somente o component App.jsx */
    /** Vr v15_f1-r14_ed25_index.js – Editado arquivo App.css e App.jsx que possui 3 Cards, no Card tem no interior <ComFilhos>, no card2 tem <ComParametro> e no Card3 tem <Primeiro> */
    /** Vr v16_f1-r15_ed27_index.js – Editado arquivo App.css colocando FlexBox em todo Card e no Conteudo do Card */    
    /** Vr v17_f1-r16_ed30_index.js – Criado __products.js com uma lista de produtos, __repeticao.jsx (Com return <li>{prod.id} – {prod.nome} → R$ {prod.preco}</li>), e edit __App.jsx que coloca <Repeticao />  em um Card */   
    /** Vr v18_f1-r17_ed31_index.js – Criado  Componente Condicional e importado componente Condicional e feito instancia do componente*/
    /** Vr v19_f1-r18_ed35_index.js – Editado Componente __Condicional colocando if tercinario para verificar se é par ou impar e update __app.jsx */
    /** Vr  v20_f8-r19_ed39_App.jsx - Criado componentes __CondicionalComIf e If e update App.jsx e foi feito instancia do componente*/
)