import React, {useState} from 'react'

export default function ItemCount(props) {
    
    const[ count, setCount] = useState(1);


    function handleAdd(){
        if (count < props.stock){
           setCount(count + 1)
        }
        else{
            alert("no esa cantidad de productos");
        }
    }
    function handleSubstract(){
        if (count>1){
           setCount(count - 1)
        }
        else{
            alert("no se puede tener menos de 1 producto");
        }
    }

    return (
    <div  stock={props.stock} >
        <button  onClick={handleSubstract}> - </button>
        <span> {count} </span>
        <button onClick={handleAdd}> + </button> 
    </div> )
}

