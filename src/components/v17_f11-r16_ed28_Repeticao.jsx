import React from 'react'
import produtos from '../data/v17_f10-r16_ed27_products.js'


// export default props => {   precisou ser substituido pois dava erro, rodava mas dava mensagem de erro
export default function getProduct() {

    function getProductListItem() {
        return produtos.map(prod => {
            /**O .map vai varrer o aplciativo a procura de cada um dos produtos
            E queremos transformar cada produto {id:1, nome : 'Caneta', preco: '7,59'}, em trecho de código jsx
            Com map transformamos o objeto {id:1, nome : 'Caneta', preco: '7,59'}, em um trecho de jsx. */
            return <li key={prod.id}>
                {prod.id} – {prod.nome} → R$ {prod.preco}
            </li>
        })
    }

    /** Vamos pegar a função getProductListItem que retorna várias <li>s  */
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                <li>{getProductListItem()}</li>
                {/** Queremos que os <li> se repitam de acordo com a quantidade de produto */}
            </ul>
        </div>
    )
}