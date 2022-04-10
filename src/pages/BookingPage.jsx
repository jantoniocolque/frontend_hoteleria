import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Booking from "../components/Booking";
import HeaderProduct from "../components/HeaderProduct";
import Policy from "../components/Policy";
import getData from "../assets/js/getData";
import "./BookingPage.css";
import SessionContextProvider from '../context/sessionContext.js';

export default function BookingPage() {
    const history = useNavigate();
    const { token } = useContext(SessionContextProvider);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (token === null || token === undefined) {
            history("/login", { state: { idProduct: id, auth: "Necesitas estar logueado para reservar un hotel" } });
        }
        getData(`/api/v1/product/${id}`)
            .then(data => {
                setProduct(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            {
                isLoading ? "cargando"
                    :
                    <div className="wrapper">
                        <div className="container-booking">
                            <HeaderProduct product={product} pathGoBack={`/product/${id}`} />
                            <Booking product={product} />
                            <Policy />
                        </div>
                    </div>
            }

        </>
    );
}
