import "./SuccessfulMessage.css";
import { useNavigate } from "react-router-dom";

export default function SuccessfulMessage({message , button}) {
    const history = useNavigate();
    const handleButtonHome = () => {
        history("/");
    }
    return (
        <div className="successful-message">
            <i className="successful-message-icon fas fa-check-circle"></i>
            <h2>¡Muchas gracias!</h2>
            <p>{message}</p>
            <button className="successful-message-button button-1" onClick={handleButtonHome}>{button}</button>
        </div>
    )
}