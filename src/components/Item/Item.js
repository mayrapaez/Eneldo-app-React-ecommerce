import ItemCountComponent from "../ItemCount/ItemCountDos";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const ItemComponent = ({ product }) => {
  const onAdd = () => {
    swal("Producto agregado exitosamente");
  };

  return (
    <div className="cardItem">
      <div>
        <Link to={"/product/${product.category}"}>
          <h2>{product.categoty}</h2>
        </Link>
      </div>
      <h3>{product.name}</h3>
      <b>${product.price}</b>
      <div>
        <ItemCountComponent stock={product.stock} initial={1} onAdd={onAdd} />
      </div>
      <Link to={"/product/${product.id}"}>
        <button>VER MAS</button>
      </Link>
    </div>
  );
};

export default ItemComponent;
