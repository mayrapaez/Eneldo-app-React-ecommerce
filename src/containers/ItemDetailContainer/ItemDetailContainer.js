import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/';
import ItemDetail from '../../containers/ItemDetailContainer/ItemDetailContainer';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const baseDeDatos = getFirestore()
        const itemCollection = baseDeDatos.collection("productos")
        console.log(itemCollection);

        itemCollection.doc(id).get()
            .then(doc => {
                if(doc.exists){
                setItem(doc.data());
            }})
            .catch((error) => {
                console.log(error)
            })
        }, [id]);
    
    return (
        <>
            {item && <ItemDetail item={item}/>}
        </>
    );
};

export default ItemDetailContainer;


