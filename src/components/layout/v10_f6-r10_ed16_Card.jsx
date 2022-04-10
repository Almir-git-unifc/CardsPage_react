import React from 'react'

export default props =>  /** componente baseado em função */
 /** O que tiver dentro da tag Card será passada no Conteudo*/
  <div className="Card">

    <div className="Conteudo">
      {props.children}    
    </div>

    <div className="Footer">
      {props.titulo}
    </div>
  </div>
