import React, { useState } from "react";
import swal from "sweetalert";
import "./styles.css";

const ItemCountComponent = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const onMinus = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      swal("Debe elegir al menos una unidad");
    }
  };

  const onPlus = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      swal("Stock no disponible");
    }
  };

  return (
    <>
      <button onClick={onMinus}>-</button>
      <span>{contador} </span>
      <button onClick={onPlus}>+</button>
      <div>
        <button onClick={onAdd}>COMPRAR</button>
      </div>
    </>
  );
};
export default ItemCountComponent;
