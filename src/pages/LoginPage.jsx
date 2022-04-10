import React from "react";
import FormLogin from "../components/FormLogin";
import { useLocation } from "react-router-dom";
//TODO delete double export changing class component to function component
export default function LoginPage({ submitForm }) {
    const location = useLocation();
    return (
        <React.StrictMode>
            <div className="wrapper">
                <div className="container">
                    <FormLogin submitForm={submitForm} message={location.state?.auth} idProduct={location.state?.idProduct} />
                </div>
            </div>
        </React.StrictMode>
    );
}
export { LoginPage };
