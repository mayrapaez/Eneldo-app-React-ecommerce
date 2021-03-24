
// import React, {useContext} from 'react'
// import { contexto } from "../../context/CardContext";


// const CartItem = ({item})=> {
//     const {cantidad, producto, subtotal} = item
//     const {removeItem} = useContext(contexto)
   
//     return (
//         <div className="productoCart">
//             <h4>{producto.title}</h4>
//             <img src={producto.pictureURL} alt={producto.title} height="70px" width="70px"></img>
//             <p>Precio: ${producto.price}</p>
//             <p>Cantidad: {cantidad}</p>
//             <p>Subtotal: ${subtotal}</p>
//             <button onClick={()=>removeItem(producto.id, cantidad)}>Quitar del carrito</button>
//         </div>
//     )
// }

// export default CartItem