import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailComponent from "../ItemDetail/ItemDetail";
import ProductList from "../../Mocks/ProductList";


const ItemDetailContainer = () => {
    const { id } = useParams();
  const [product, setProduct] = useState([]);
  
  console.log(id);
  useEffect(() => {

    const PromesaDetail = new Promise((resolve, reject) => {
        setTimeout(() => resolve(ProductList.find(prod => prod.id === id), 3000));
    });

    PromesaDetail.then((result) => {
        setProduct(result);
    });
}, [id]);

  return (
    <>
      {product && <ItemDetailComponent product={product}/> }
    </>
  );
};
export default ItemDetailContainer;
