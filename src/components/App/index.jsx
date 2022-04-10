import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import LoginPage from "../../pages/LoginPage";
import { SigninPage } from "../../pages/SigninPage";
import { useState } from "react";
import { Header } from '../Header';
import { Footer } from '../Footer';
import MenuMobile from "../MenuMobile";
import { useEffect } from "react/cjs/react.development";
import ProductPage from "../../pages/ProductPage";
import BookingPage from "../../pages/BookingPage";
import SuccessfulMessagePage from "../../pages/SuccessfulMessagePage";
import { SessionContextProvider } from '../../context/sessionContext.js';
import { FavoriteContextProvider } from '../../context/favoriteContext.js';
import FavoritePage from "../../pages/FavoritePage";
import MyBookingPage from "../../pages/MyBookingPage";

export default function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [toggle, setToggle] = useState();
    const handleChangePageHome = () => {
        setToggle(!toggle);
    }
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <BrowserRouter>
            <FavoriteContextProvider>
                <SessionContextProvider>
                    <Header handleChangePageHome={handleChangePageHome} setIsSubmitted={setIsSubmitted} />
                    <Routes>
                        <Route exact path="/" element={<Home toggle={toggle} />} />
                        <Route exact path="/login" element=

                            {!isSubmitted ?
                                <>
                                    <LoginPage submitForm={submitForm} />
                                </>
                                :
                                <>
                                    <Navigate to="/" />
                                </>
                            } />
                        <Route exact path="/signin" element=
                            {!isSubmitted ?
                                <SigninPage submitForm={submitForm} />
                                :
                                <>
                                    <Navigate to="/" />
                                </>
                            } />
                        <Route exact path="/product/:id" element={<ProductPage />} />
                        <Route exact path="/product/:id/booking" element={
                            <BookingPage />
                        } />
                        <Route exact path="/favorite" element={<FavoritePage />} />
                        <Route exact path="/success-booking" element={<SuccessfulMessagePage message="Su reserva se ha realizado con éxito" button="Ok"/>} />
                        <Route exact path="/success-product" element={<SuccessfulMessagePage  message="Tu propiedad se ha creado con éxito" button="Volver"/>} />
                        <Route exact path="/1/mybooking" element={<MyBookingPage />} />
                    </Routes>
                    <Footer />
                    <MenuMobile setIsSubmitted={setIsSubmitted} />
                </SessionContextProvider>
            </FavoriteContextProvider>
        </BrowserRouter>
    )
}


