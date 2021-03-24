import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/NavBarComponent/NavBarComponent';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros.js';
import Contacto from './components/Contacto/Contacto.js';
import CartContainer from './containers/cartContainer/cartContainer.js';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout.js';

const App = () => {
  return (
    <CartProvider>
      
      <Router>

        <Navbar/>

        <Switch>

          <Route exact path="/" component={Home}/>

          <Route exact path="/home" component={Home}/>

          <Route  path="/productos/categorias/:category" component={ItemListContainer}/>

          <Route  path="/productos" component={ItemListContainer}/>

          <Route  path="/productos/:id" component={ItemDetailContainer}/>

          <Route exact path="/carrito" component={CartContainer}/>

          <Route exact path="/Checkout" component={Checkout}/>

          <Route exact path="/nosotros" component={Nosotros}/>

          <Route exact path="/contacto" component={Contacto}/>

          <Route path="*" children={<div className="d-flex justify-content-center my-5"><img src="../images/404.png" alt="Error 404"/></div>}/>

        </Switch>

        <Footer/>

      </Router>
    
    </CartProvider>
  );
};

export default App;

