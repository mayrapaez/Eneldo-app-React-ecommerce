import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
  <div>
    <NavbarComponent />
    <ItemListContainer greeting={"Bienvenidos a Eneldo Mercado Natural"} />
  </div>
  );}

export default App;
