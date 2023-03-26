import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import productsDatabase from '../../data/products';
import { useParams } from 'react-router-dom';


/*-----------mock async <Service----------></Service---------->*/

function getItems(){
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(productsDatabase);
    },1000);
  });


  return promesa;
}

function getItemsByCategory(categoryURL){
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      //filtro de Array
     const filtrocategoria = productsDatabase.filter(item=> item.category===categoryURL);
     resolve(filtrocategoria);
    },1000);
  });
  return promesa;
}


function ItemListContainer(){
  //useState es para que renderice otra vez una vez que el getItem haga una pasada por el asincro
   const [products, setProducts ] = useState([]);
  

   let {categoryid } = useParams();
  

   useEffect(()=>{
    if ( categoryid === undefined){
             getItems().then((respuesta) => {
  
             console.log("promesa cumplida", respuesta);
  
             setProducts(respuesta) ;
             });}
             else{
              getItemsByCategory(categoryid).then(
                (respuesta)=> setProducts(respuesta)
              )
             }
            },
            [categoryid] );
  
  
  
  
      return(
        <ItemList products={products}/>

      )
  }
  
  export default ItemListContainer