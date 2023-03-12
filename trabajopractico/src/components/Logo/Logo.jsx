import "./logo.css"

function Logo(props){
    return(
        <div>
            <img src={props.logo} className="img-logo" alt="cine-logo"></img>
        </div>
    )
}

export default Logo;