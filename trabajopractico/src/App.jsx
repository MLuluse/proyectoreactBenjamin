
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConatiner'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="bodystyle">
      <BrowserRouter>

         <NavBar />
         <Routes>

          <Route path="/" element={ <ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="category/:categoryid" element={<ItemListContainer/>}/>
          <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
          
         </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
