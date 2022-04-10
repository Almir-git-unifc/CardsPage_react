import React from 'react'

export default props => {

    /** Vamos fazer uma função para se o número o par mostre o de cima, senão mostre o debaixo. */
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {/** Abaixo fizemos um IF (com operador tercinário) misturado com span HTML */}
            {props.numero % 2 === 0 ?
                <span>Par</span>
                : <span>Ímpar</span>
            }
        </div>
    )
} 