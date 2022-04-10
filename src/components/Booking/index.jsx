import FormBooking from "./FormBooking";
import "./Booking.css";
import Schedule from "./ScheduleBooking";
import DetailsBooking from "./DetailBooking";
import CalendarReserve from "../CalendarReserve";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SessionContextProvider from "../../context/sessionContext";

function Booking({ product }) {
    const history = useNavigate();
    const { token, user } = useContext(SessionContextProvider);
    const [error, setError] = useState("");
    const [errorCalendar, setErrorCalendar] = useState("");
    const [errorTime, setErrorTime] = useState("");
    const [covid, setCovid] = useState(false);
    const [info, setInfo] = useState("");
    const [time, setTime] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleCovid = (cov) => {
        setCovid(cov === "Si" ? true : false);
    }
    const handleInfo = (inf) => {
        setInfo(inf);
    }
    const handleTime = (tim) => {
        setTime(tim);
    }
    const handleSelectRangeDate = (dateIn, dateOut) => {
        setStartDate(dateIn);
        setEndDate(dateOut);
    }
    const handleSubmitReserve = (e) => {
        if (!startDate || !endDate) {
            setErrorCalendar(<span className="error">Check-in y check-out obligatorios</span>)
        } else {
            setErrorCalendar("");
        }
        if (!time) {
            setErrorTime(<span className="error">Hora de llegada obligatoria</span>)
        } else {
            setErrorTime("");
        }
        if (!errorCalendar && !errorTime) {
            fetch("http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/reserve", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    dateIn: startDate.split("/")[2] + "-" + (startDate.split("/")[1] < 10 ? "0" + startDate.split("/")[1] : startDate.split("/")[1]) + "-" + (startDate.split("/")[0] < 10 ? "0" + startDate.split("/")[0] : startDate.split("/")[0]),
                    dateOut: endDate.split("/")[2] + "-" + (endDate.split("/")[1] < 10 ? "0" + endDate.split("/")[1] : endDate.split("/")[1]) + "-" + (endDate.split("/")[0] < 10 ? "0" + endDate.split("/")[0] : endDate.split("/")[0]),
                    hourIn: time,
                    info: info,
                    covid: covid,
                    user: {
                        userId: user.userId,
                    },
                    product: {
                        productId: product.productId
                    }
                })
            }).then(res => {
                if (res.status >= 400 && res.status < 500) {
                    return Promise.reject(new Error("Error en la eleccion de fechas para el hotel"))
                }
                if (res.status >= 500) {
                    return Promise.reject(new Error("Lamentablemente no hemos podido guardar su reserva. Porfavor intentelo mas tarde"))
                }
                return res.text()
            }).then(data => {
                history("/success-booking");
            }).catch(error => { setError(error.message) })
        }
    }
    return (
        <div className="booking">
            <div>
                <h2 className="booking-title">Completá tus datos</h2>
                <FormBooking handleCovid={handleCovid} handleInfo={handleInfo} />
                <h2 className="booking-title">Seleccioná tu fecha de reserva</h2>
                <CalendarReserve idProduct={product.productId} handleSelectRangeDate={handleSelectRangeDate} error={errorCalendar} />
                <h2 className="booking-title">Tu horario de llegada</h2>
                <Schedule handleTime={handleTime} error={errorTime} />
            </div>
            <DetailsBooking product={product} startDate={startDate} endDate={endDate} handleSubmitReserve={handleSubmitReserve} error={error} buttonText="Confirmar Reserva" />
        </div>
    )
}

export default Booking;