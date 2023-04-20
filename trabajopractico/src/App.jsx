
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConatiner'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartProvider} from './storeContext/cartContext'
import CartContainer from './components/cartContainer/cartContaniner';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="bodystyle">

      <CartProvider>

      <BrowserRouter>

         <NavBar />
         <Routes>

          <Route path="/" element={ <ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="category/:categoryid" element={<ItemListContainer/>}/>
          <Route path="/cart"element ={<CartContainer/>}/>
          <Route path="/checkout/:orderid" element={<Checkout/>}/>
          <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
          
         </Routes>

      </BrowserRouter>

      </CartProvider>

    </div>
  );
}

export default App;
