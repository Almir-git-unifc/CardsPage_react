import React from 'react'
import produtos from '../../data/products.js'

export default function getProduct() {

    function getProductListItem() {
        return produtos.map(prod => {
           
            return <li key={prod.id}>
                {prod.id} – {prod.nome} → R$ {prod.preco}
            </li>
        })
    }
   
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                <li>{getProductListItem()}</li>
                { }
            </ul>
        </div>
    )
}