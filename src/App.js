import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from "sweetalert";
import NavbarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';


const App = () => {



  function handleAdd(counter) { } 
  return (
      <>
          <NavbarComponent />
          <ItemListContainer greeting = {'Bienvenidos a ENELDO Mercado Natural'}/>          
          <ItemCount onAdd = {handleAdd} stock = {20} inicial = {0}/>
          <ItemDetailContainer />
      </>
  );
}
export default App;
