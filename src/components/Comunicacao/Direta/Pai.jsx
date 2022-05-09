
import React from 'react'
import Filho from './Filhos'

export default (props) => 

   <div>
      <Filho {...props}>nomeFilho: João</Filho>  
      <Filho Sobrenome={props.Sobrenome}>nomeFilho: Maria</Filho>
      <Filho Sobrenome="Silva">nomeFilho: Pedro</Filho>
   </div>
