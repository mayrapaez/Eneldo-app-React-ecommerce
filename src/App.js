import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from "sweetalert";
import NavbarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/Contador/ItemCount";


const App = () => {

  let stock = 20

  const handleAdd = (counter) => {
      return () => {
          if(stock <= 0){
              swal('No hay stock')
          }else{
              swal(`Se van a agregar ${counter} items`)
          }
      }
  }
  
  return (
      <>
          <NavbarComponent />
          <ItemListContainer greeting = {'Bienvenidos a ENELDO Mercado Natural'}/>          
          <div className="App">
              <ItemCount onAdd = {handleAdd} stock = {stock} inicial = {0}/>
          </div>
      </>
  );
}
export default App;
