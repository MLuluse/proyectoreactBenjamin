//lugar donde se va a guardar el detalle de un producto
import { useState, useEffect } from 'react';
import Flex from '../Flex/Flex';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getSingleItem} from '../services/firestore';


function ItemDetailConatainer(){
    const [product, setProduct] = useState([]);

    let{id}= useParams();
    getSingleItem(id);
    console.log(id);

    useEffect(
        ()=>{

           getSingleItem(id).then((respuesta) => {

           console.log("promesa cumplida", respuesta);

           setProduct(respuesta) ;
           });
          },
          [id]
        )
        if(product.length === 0){
    
          return <Loader/>}


    return(
        <div>
            <Flex>
            <ItemDetail
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            stock={product.stock}
            img ={product.img}/>

        </Flex>
        </div>

    )

}

export default ItemDetailConatainer;