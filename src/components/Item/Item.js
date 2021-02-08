import ItemCountComponent from '../ItemCount/ItemCount';
import swal from "sweetalert";

const ItemComponent = ({product}) => {
    const onAdd = () => {
        swal("Producto agregado exitosamente");
    }

    return (
        
        <div className="cardItem">
            <h3>{product.name}</h3>
            <p>{product.detail}</p>
            <b>${product.price}</b>
            <div>
            <ItemCountComponent stock ={product.stock}
            initial = {1}
            onAdd = {onAdd} />
            </div>
        </div>
        
    )
}

export default ItemComponent; 