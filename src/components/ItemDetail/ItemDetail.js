import ItemCount from "../ItemCount/ItemCountDos";
import swal from "sweetalert";
import { Link } from "react-router-dom";

import React, {useState, useEffect} from 'react';

const ItemDetailComponent = ({ product }) => {
    const [AddToCart, setAddToCart] = useState(false);
  const onAdd = () => {
    swal("Producto agregado exitosamente");
    setAddToCart(true);
  };

  return (
    <div className="cardDetail">
      <div key={product.id}>
        <h3>{product.name}</h3>
      </div>
      <div className="descripcion">
        <p>{product.detail}</p>
        <span>${product.price}</span>
        <div>
          {AddToCart ? <Link to={`/Cart`}>VER CARRITO DE COMPRAS</Link> : <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailComponent;
