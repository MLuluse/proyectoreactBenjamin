//lugar donde se va a guardar el detalle de un producto
import { useState, useEffect } from 'react';
import Flex from '../Flex/Flex';
import productsDatabase from '../../data/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


/*---------funcion asincronica------->*/
function getSingleItem(idURL){
   const promesa = new Promise((resolve, reject)=>{
      setTimeout(
      () => {
        const idencontrado = productsDatabase.find(item =>{
          return(item.id === parseInt(idURL))
        })
        resolve(idencontrado)
       },1000)
     } )
     return promesa;
   }
//---------------<>----------------
function ItemDetailConatainer(){
    const [product, setProduct] = useState([]);

    let{id}= useParams();
    console.log(id);

    useEffect(
        ()=>{
             //aca levanta con el then el resolve la promesa 
           getSingleItem(id).then((respuesta) => {

           console.log("promesa cumplida", respuesta);

           setProduct(respuesta) ;
           });
          },
          []
        )


    return(
        <div>
            <Flex>
            <ItemDetail
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            img ={product.img}/>

        </Flex>
        </div>

    )

}

export default ItemDetailConatainer;