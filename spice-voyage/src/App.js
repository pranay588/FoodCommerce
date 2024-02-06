import HomePage from "./homePage";
import Menu from "./components/menu/menu.js";
import Header from "./components/header/header.js";
// import Buying from "./components/Buying/Buying.js";
import "./App.css";
import Cart from "./components/cart/Cart";
import { BrowserRouter,Routes,Router, Route } from "react-router-dom";
import TotalBuyingState from "./context/TotalBuyingState";

import { SignUp } from "./scenes/SignUp/signup";
import { Login } from "./scenes/login/login";


function App() {

  return (
    <div className="App">
      <TotalBuyingState>
      
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </TotalBuyingState>

        
    </div>
    
  );
}

export default App;
