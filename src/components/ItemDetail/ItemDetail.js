import ItemCount from "../ItemCount/ItemCount";
import swal from "sweetalert";


const ItemDetailComponent = ({ item }) => {
    // console.log(item);
    const onAdd = () => {
        swal("Producto agregado exitosamente");
    }

    return (
    <div className="cardDetail">
        <div>
        <h3>{item.name}</h3>
        <img src="item.img" alt=""/> <img/></div>
        <div className="descripcion">
        <p>{item.detail}</p>
        <span>{item.price}</span>
        <div>
            <ItemCount stock ={item.stock}
            initial = {1}
            onAdd = {onAdd} />
        </div>
        </div>
    </div>
    );
};

export default ItemDetailComponent;

