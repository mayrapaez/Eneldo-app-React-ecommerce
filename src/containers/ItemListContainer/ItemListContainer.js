import React, {useState, useEffect} from 'react';
// import './stylescontainers.scss';
import ItemList from '../../containers/ItemListContainer/ItemListContainer';
import { getFirestore } from '../../firebase/index';


const ItemListContainer = ({category= null}) => {

    let [item, setItem] = useState ([]);
   

    
    useEffect(() => {
        const baseDeDatos = getFirestore();
        if(!category) {
            baseDeDatos.collection("productos")            
                .get()
                .then(docs => {
                    let arr = [];
                    docs.forEach(doc => {
                        arr.push({id:doc.id, data:doc.data()})
                    })

                    setItem(arr);
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            baseDeDatos.collection("productos").where('category', '==', category)
                .get()
                .then(docs => {
                    let arr = [];
                    docs.forEach(doc => {
                        arr.push({id:doc.id, data:doc.data()})
                    })

                    setItem(arr);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [category]);



    return (
        <>
        
        <ItemList item = {item} />

        </> 
    );
} 

export default ItemListContainer;


