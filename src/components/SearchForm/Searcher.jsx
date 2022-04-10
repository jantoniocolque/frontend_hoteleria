import React from "react";
import Calendar from "./Calendar";
import Location from "./Location";
import "./Searcher.css";
import { useState, useEffect } from 'react';
function Searcher({ handleSubmit, handleRangeDates }) {
    const [hideCalendar, setHideCalendar] = useState(1);
    const handleZindexCalendar = (z) => {
        var width = window.innerWidth;
        if (width <= 760) {
            setHideCalendar(z);
        }
    }
    useEffect(() => {
        const calendar = document.querySelector(".react-datepicker-wrapper");
        calendar.style.zIndex = hideCalendar;
    }, [hideCalendar])
    return (
        <div className="container-searcher">
            <h1 className="container-searcher__title">Busca ofertas en hoteles, cabañas y mucho más!</h1>
            <form className="container-searcher__form" onSubmit={handleSubmit}>
                <Location className="container-searcher__form__location" zIndexCalendar={handleZindexCalendar} />
                <Calendar className="container-searcher__form__calendar" handleRangeDates={handleRangeDates} />
                <button type="submit" className="container-searcher__form__button button-search animation-button-filled">Buscar</button>
            </form>
        </div>
    )
}

export default Searcher;