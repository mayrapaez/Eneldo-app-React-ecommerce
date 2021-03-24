import React, { useState } from "react";

import "./styles.css";

const ItemCountComponent = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const decrementar = () => {
      setContador(contador - 1);
  };

  const incrementar = () => {
      setContador(contador + 1);
  };
  return (
    <>
        {(stock === 0) ?
            <div className="d-flex justify-content-center align-items-baseline mt-3">
                <div className="card-footer cardFooterItemCount pt-3 pb-0">
                    <button type="button" className="btn mainBtn disabled">SIN STOCK</button>
                </div>
            </div>
            :
            <div className="d-flex justify-content-center align-items-baseline mt-3">
                {(contador > 1) ?
                    <button className="btn quantityBtn" onClick={() => {decrementar()}}>-</button>
                    : <button className="btn quantityBtn disabled">-</button>
                }
                <b className="px-3">{contador}</b>
                {(contador < stock) ?
                    <button className="btn quantityBtn" onClick={() => {incrementar(stock)}}>+</button>
                    : <button className="btn quantityBtn disabled">+</button>
                }
                <div className="card-footer cardFooterItemCount pt-3 pb-0">
                    <button type="button" className="btn shadow-sm mainBtn addToCart" data-id="1" onClick={(evt) => {onAdd(evt, contador)}}>Agregar</button>
                </div>
            </div>
        }
    </>
);
};
export default ItemCountComponent;

