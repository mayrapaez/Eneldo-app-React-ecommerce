import React, {useState, useEffect} from 'react';
import ItemDetailComponent from '../ItemDetail/ItemDetail';
import productList from '../../Mocks/ProductList'; 
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState({});
    

    console.log(id)
 
    useEffect(() => {
    
        const itemsPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productList);
            }, 1000);
        });    
        
        
        itemsPromise.then((resp) => {
            let item = resp.find(prod => (id) => 
            {return prod.id === id})
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


