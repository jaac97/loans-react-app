import React from 'react';

const Result = ({total, quantity, term}) => {
    return ( <div className='u-full-width resultado'>
        <h2>Resumen</h2>
        <p>Cantidad solicitada: ${quantity}</p>
        <p>Cantidad a pagar en: {term} Meses</p>
        <p>Pago mensual {parseFloat(total / term).toFixed(2)} </p>

        <p>Total a pagar : ${total}</p>

    </div> );
}
 

export default Result;