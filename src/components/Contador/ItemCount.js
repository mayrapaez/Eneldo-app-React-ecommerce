import React, {useState} from 'react';
import Display from './display/Display';
import Button from './button/Button';
import Add from './add/Add';

const style = {
    margin: '100px auto',
    widht: 300,
    height: 100,
    backgroundColor: 'grey',
}

const upper = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'pink'
    
}

const lower = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
}

export default function ItemCount({ onAdd, stock, inicial}){

    let [counter, setCounter] = useState(inicial);

    const handleClick = (amount) => {
        return(
            () =>{
                let total = (amount < 0) ? 0: amount;
                let limiter = (amount > stock) ? stock : total;
                setCounter(limiter);
            }
        )
    };

    let prop = {counter, setCounter}

    return (
        <>
            <div className="ItemCount" {...{style}}>
                <div className="upper" style={upper}>
                    <Button suma = {false} onClick = {handleClick} {...prop}/> 
                    <Display value = {counter}/> 
                    <Button suma = {true} onClick = {handleClick} {...prop}/>
                </div>
                <div className="lower" style={lower}>
                <Add onAdd = {onAdd} {...{counter}}/>
                </div>
            </div>
        </>
    )
}
