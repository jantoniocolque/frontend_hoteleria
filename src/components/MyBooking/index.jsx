import DetailBooking from "../Booking/DetailBooking";
import { useEffect, useState, useContext } from "react";

export default function MyBooking({booking, dateIn, dateOut}){
    const buttonText = "Editar reserva"
    return(
        <div>
            <h2 classname="my-bookings">Mis Reservas</h2>
            {booking.map(
                b => { 
                    return(
                    <DetailBooking product={b.product} startDate={dateIn} endDate={dateOut} buttonText={buttonText}/>
                )}
            )}
        </div>
    )
}