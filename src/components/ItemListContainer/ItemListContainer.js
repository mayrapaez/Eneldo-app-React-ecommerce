
import React, {useState, useEffect} from 'react';
import "./Item.css"
import ItemListComponent from '../ItemList/ItemList';
import productList from '../../Mocks/ProductList'; 

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([]);

    useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            setTimeout(() => 
            res(productList), 3000);
            // console.log(productList, products);
            
        });

        myPromise.then((result) => {setProducts(result)});
    }, []);
    return (
        <div>
           <h1>{greeting}</h1>
           <ItemListComponent products = {products} /> 
        </div>
    )
}

export default ItemListContainer;
