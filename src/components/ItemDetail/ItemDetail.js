import ItemCount from "../ItemCount/ItemCount";
import swal from "sweetalert";



const ItemDetailComponent = ({ item }) => {
    
    const onAdd = () => {
        swal("Producto agregado exitosamente");
    }

    return (
    <div className="cardDetail">
        <div key={item.id}>
        <h3>{item.name}</h3>
        </div>
        <div className="descripcion">
        <p>{item.detail}</p>
        <span>{item.price}</span>
        <div>
            <ItemCount stock ={item.stock}
            initial = {0}
            onAdd = {onAdd} />
        </div>
        </div>
    </div>
    );
};

export default ItemDetailComponent;

