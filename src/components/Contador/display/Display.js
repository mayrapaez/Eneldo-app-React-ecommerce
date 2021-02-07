  
import React from 'react';

const style = {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    margin: '5px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
}


export default function Display ({value}){

    return(
        <div className='display' {...{style}}>{value}</div>
        )
}