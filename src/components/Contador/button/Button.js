import React from 'react';

const style = {
    width: 40,
    height: 40,
    margin: '10px 40px',
    cursor: 'pointer',
    fontWeight: 1000,
}

export default function Button( {suma, onClick, counter} ){

    let sign = suma ? '+' : '-';

    let amount = suma ? (counter + 1) : (counter - 1);

    return(<button onClick = {onClick(amount)}{...{style}}>{sign}</button>)

}