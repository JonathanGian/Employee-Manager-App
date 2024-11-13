import "./Button.css"

const Button = ({text,onClick, type = "button", role })=>{
    return (
        <button className={role} onClick={onClick} type = {type}>{text}</button>
    );
};

export default Button;