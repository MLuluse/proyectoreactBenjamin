
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="">
      <header className="">
         <NavBar />
         <ItemListContainer titulo =" me gusta el jamon cocido"/>
      </header>
    </div>
  );
}

export default App;
