function Button(props) {
    return (
        <button className="cont-with"><img className="cont-with-img"src={props.photo} alt={props.with} />Continue with {props.with}</button>
    );
}

export default Button;