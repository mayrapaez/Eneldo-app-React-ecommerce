
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./Item.css"
import ItemListComponent from '../ItemList/ItemList';
import ProductList from "../../Mocks/ProductList";

const ItemListContainer = ({greeting}) => {

    const {category} = useParams();
    const [products, setProducts] = useState ([]);
    console.log(category);

    useEffect(() => {

        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve((category ? ProductList.filter(prod => prod.category === category) : ProductList), 3000));
        });

        myPromise.then((result) => {
            setProducts(result);
        });
    }, [category]);
    return (
        <div>
           <h1>{greeting}</h1>
           <ItemListComponent products = {products} /> 
        </div>
    )
}

export default ItemListContainer;
