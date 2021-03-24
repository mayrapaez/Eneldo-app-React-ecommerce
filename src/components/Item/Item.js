import { Link } from 'react-router-dom';
import './styles.css';

const Item = ({ item }) => {

    return (
        <div className="col mb-4">
            <Link to={`/productos/${item.id}`}>
                <div className="card cardItem shadow">
                    <img src={item.image} className="card-img-top img-fluid" alt={item.name}/>
                    <div className="card-body py-0 px-3">
                        <h5 className="card-title m-0">{item.name}</h5>
                        <p className="mt-3">${item.price}</p>
                    </div>
                    {(item.stock === 0) ?
                        <div className="card-footer">
                            <button type="button" className="btn mainBtn disabled">SIN STOCK</button>
                        </div>
                        :
                        <div className="card-footer">
                            <button type="button" className="btn shadow-sm mainBtn seeDetail">Ver producto</button>
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
};

export default Item;


// import ItemCountComponent from "../ItemCount/ItemCountDos";
// import swal from "sweetalert";
// import { Link } from "react-router-dom";

// const ItemComponent = ({ product }) => {
//   const onAdd = () => {
//     swal("Producto agregado exitosamente");
  
//   };

//   return (
//     <div className="cardItem">
//       <div key={product.id}>
//       <h2>{product.category}</h2>
//       <h3>{product.name}</h3>
//       <b>${product.price}</b>
//       <div>
//         <ItemCountComponent stock={product.stock} initial={1} onAdd={onAdd} />
//       </div>
//       <Link to={`/product/${product.id}`}>
//         <button>VER MAS</button>
//       </Link>
//     </div>
//     </div>
//   );
// };

// export default ItemComponent;
