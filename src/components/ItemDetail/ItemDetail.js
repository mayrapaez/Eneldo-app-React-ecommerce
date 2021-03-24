import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './detailStyle,css';
import ItemCount from '../../components/ItemCount/ItemCountDos';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);

    const { addItem } = useCartContext();

    const onAdd = (evt, quantity) => {
        evt.stopPropagation();

        addItem(item, quantity);

        setGoToCart(true);
        addCart({item, cantidad: quantity,}, quantity)
    };

    return (
        <div className="container-fluid mx-0 my-5 px-5">
            <div className="card cardItemDetail p-sm-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={item.image} alt={item.name}/>
                    </div>
                    <div className="col-md-8 card-body mt-4" key={item.id}>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.detail}</p>
                        <p className="card-text productPrice">${item.price}</p>
                        {goToCart ?
                            <div>   
                            <Link to={`/carrito`}><button type="button" className="btn shadow-sm mainBtn goToCart">Ver carrito</button></Link>
                            <Link to={`/`}><button type="button" className="btn shadow-sm mainBtn goToCart">Seguir Comprando</button></Link>
                            </div>
                            : <ItemCount inicial={1} stock={product.stock} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;

