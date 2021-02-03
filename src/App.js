import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardCounter from "./components/CardCounter/CardCounter";

function App() {
  return (
  <div>
    <NavbarComponent />
    <ItemListContainer greeting={"Bienvenidos a Eneldo Mercado Natural"} />
    <CardCounter product="Mantequilla de Mani" productDescription="mantequilla de mani sin azucar 100% natural" price="$280" />
  </div>
  );}

export default App;
