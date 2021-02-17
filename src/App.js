import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import swal from "sweetalert";
import NavbarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavbarComponent />

          <Switch>
          <Route exact path="/" component={ItemListContainer}>
          <ItemListContainer greeting={`Bienvenidos a ENELDO Mercado Natural`}/>
            </Route>    
          <Route  path="/product/categorias/:category" component={ItemListContainer}/>
            
          <Route  path="/product/:id" component={ItemDetailContainer}/>

          </Switch>

        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
