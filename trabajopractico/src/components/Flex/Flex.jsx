
function Flex(props){
    return(
        <div style={{display: "flex", flexWrap:"wrap"}}>
         {props.children}
        </div>

    )
}

export default Flex;