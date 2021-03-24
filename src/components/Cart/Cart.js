// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { contexto } from "../../context/CardContext";
// import Item from "../../components/CardItem/CardItem";

// const Cart = () => {
//   const { cart, precioTotal, clear } = useContext(contexto);
//   return (
//     <div className="cart">
//       <h1>Este es el Carrito de tu compra!!!</h1>
//       {cart.length > 0 ? (
//         <>
//           {cart.map((item) => {
//             return <Item key={item.producto.id} item={item} />;
//           })}
//           <p>Total: ${precioTotal()}</p>
//           <button onClick={clear} className="botonCart">
//             Vaciar el carrito
//           </button>
//           <button>Comprar</button>
//         </>
//       ) : (
//         <>
//           <p>Su carrito está vacío.</p>
//           <button>
//             <Link to="/">Ir a la tienda</Link>
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
