import "./FormBooking.css";
import { useState, useEffect, useContext } from "react";
import SessionContextProvider from "../../context/sessionContext.js";
export default function FormBooking({ handleInfo, handleCovid }) {
    const handleOnChangeCovid = (e) => {
        handleCovid(e.target.value)
    }
    const handleOnChangeInfo = (e) => {
        handleInfo(e.target.value)
    }
    const { user } = useContext(SessionContextProvider);
    return (
        <form action="" className="booking-form">
            <div className="booking-form-div">
                <label htmlFor="name" className="booking-form__label">Nombre</label>
                <input id="name" name="name" type="text" className="booking-form__input" value={user?.name} disabled />
            </div>
            <div className="booking-form-div">
                <label htmlFor="surname" className="booking-form__label">Apellido</label>
                <input id="surname" name="surname" type="text" className="booking-form__input" value={user?.surname} disabled />
            </div>
            <div className="booking-form-div">
                <label htmlFor="email" className="booking-form__label">Correo electrónico</label>
                <input id="email" name="email" type="email" className="booking-form__input" value={user?.email} disabled />
            </div>
            <div className="booking-form-div">
                <label htmlFor="city" className="booking-form__label">Ciudad</label>
                <input id="city" name="city" type="text" className="booking-form__input" />
            </div>
            <div className="booking-form-div covid">
                <div className="booking-form-covid">
                    <label htmlFor="covid" className="booking-form__label">¿Estás vacunado contra el COVID-19?</label>
                    <label htmlFor="covidYes" className="booking-form__label info">Sí<input onChange={handleOnChangeCovid} id="covidYes" type="checkbox" value="Si" className="booking-form-checkbox" /></label>
                </div>
                <label htmlFor="covid" className="booking-form__label info">Dejá información adicional al vendedor</label>
                <textarea name="covid" id="covid" cols="30" rows="10" onChange={handleOnChangeInfo}></textarea>
            </div>
        </form>
    )
}