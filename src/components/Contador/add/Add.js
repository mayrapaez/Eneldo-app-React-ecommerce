  
import React from 'react';

let style = {
    width: 70,
    height: 30,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    color: 'white',
    cursor: 'pointer',
    marginTop: '10',
}

export default function Add({onAdd, counter}){
    return(
        <button {...{style}} onClick = {onAdd(counter)} >Agregar</button>
    )

}