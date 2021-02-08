  
import Item from "../Item/Item";



const ItemListComponent = ({ products }) => {

    return(
    <div>
    {products.map((product) => {
        return <Item key={product.id} product={product} />;

    })}
    </div>
);
};

export default ItemListComponent;