// O Componente filho
// props.Sobrenome  -> O filho vai herdar o Sobrenome! 
import React from 'react'

export default props => 

   <div>
      <p>{props.children}  {props.Sobrenome}</p>
   </div>