import ItemCount from "../ItemCount/ItemCountDos";
import swal from "sweetalert";

const ItemDetailComponent = ({ product }) => {
  const onAdd = () => {
    swal("Producto agregado exitosamente");
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
          <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailComponent;
