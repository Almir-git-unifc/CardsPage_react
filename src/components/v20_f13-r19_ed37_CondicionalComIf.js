import React from 'react'
import If from './v20_f14-r19_ed38_If'

export default props => {

    /** Vamos fazer uma função para se o número o par mostre o de cima, senão mostre o debaixo. */
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {/** Abaixo fizemos um IF tradicional misturado com span HTML */}
            <If test={props.numero % 2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.numero % 2 === 1}>
                 <span>Ímpar</span>
            </If>
        </div>
    )
} 