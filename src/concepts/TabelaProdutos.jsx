import React from 'react';
import produtos from '../data/produtos';

export default (props) => {
    return (
        <table>
            <tr>
                <td>ID</td>
                <td>PRODUTO</td>
                <td>PREÇO</td>
            </tr>
               {produtos.map((item) => {
                   return [
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.produto}</td>
                            <td>R${item.preço.toFixed(2)}</td>
                        </tr>
                    ];
                })}
        </table>
    )
}