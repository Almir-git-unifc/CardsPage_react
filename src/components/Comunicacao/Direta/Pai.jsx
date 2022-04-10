// O componente pai fica assim:
import React from 'react'
import Filho from './Filhos'

export default (props) => 
// O pai pode ter vários filhos
   <div>
      <Filho {...props}>nomeFilho: João</Filho>  
      <Filho Sobrenome={props.Sobrenome}>nomeFilho: Maria</Filho>
      <Filho Sobrenome="Silva">nomeFilho: Pedro</Filho>
   </div>
