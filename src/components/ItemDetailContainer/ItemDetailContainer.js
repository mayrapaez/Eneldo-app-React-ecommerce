import React, {useState, useEffect,} from 'react';
import ItemDetailComponent from '../ItemDetail/ItemDetail';
import productList from '../../Mocks/ProductList';
import { useParams } from "react-router-dom";


const itemsPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res(productList);
    }, 2000);
});

const ItemDetailContainer = () => {
    const [id] = useParams()
    const [item, setItem] = useState([]);
    
    console.log(id);

    useEffect(() => {
        itemsPromise.then((resp) => {
            let item = resp.find(prod => (id) => 
            {return prod.id == 2})
            setItem(item)
        });
    }, []);

    return (
    <>
    <ItemDetailComponent item={item} />
    </>
    );
};
export default ItemDetailContainer;

