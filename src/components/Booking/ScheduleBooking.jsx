import "./ScheduleBooking.css"
import { useState, useEffect } from "react";
export default function ScheduleBooking({ handleTime, error }) {
    const [showList, setShowList] = useState(false);
    const input = document.querySelector(".booking-schedule-time-input");
    const resetItemTime = () => {
        const listTime = document.querySelectorAll("li");
        listTime.forEach(item => {
            item.classList.remove("hideItem");
        })
    }
    const handleListTime = (e) => {
        resetItemTime()
        setShowList(!showList);
    }
    const handleSelectionTime = (e) => {
        input.value = e.target.innerHTML;
        const timeSelect = e.target.innerHTML.split(" ")[0];
        handleTime(timeSelect);
    }
    const handleChangeTime = (e) => {
        const listTime = document.querySelectorAll("li");
        listTime.forEach(item => {
            if (!item.innerHTML.includes(e.target.value)) {
                item.classList.add("hideItem");
            }
        })
        if (e.target.value === "")
            resetItemTime()
    }
    useEffect(() => {
        const input = document.querySelector(".booking-schedule-time-input");
        const list = document.querySelector(".container-booking-time-item");
        const icon = document.querySelector(".booking-schedule-time-icon");
        window.addEventListener("click", (e) => {
            if (e.target !== input && e.target !== list && e.target !== icon) {
                setShowList(false);
            }
        })
    }, []);
    useEffect(() => {
        const list = document.querySelector(".container-booking-time-item");
        const icon = document.querySelector(".booking-schedule-time-icon");
        if (showList) {
            list.classList.remove("hideItem");
            icon.classList.add("hideItem");
        } else {
            list.classList.add("hideItem");
            icon.classList.remove("hideItem");
        }
    }, [showList])
    return (
        <div className="booking-schedule">
            <div className="booking-schedule-join">
                <i className="booking-schedule-icon far fa-check-circle"></i>
                <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
            </div>
            <p>Indicá tu horario estimado de llegada</p>
            <div className="booking-schedule-time">
                {error && <p className="error">{error}</p>}
                <input placeholder="10:00 AM" name="time" id="time" type="text" className="booking-schedule-time-input" onChange={handleChangeTime} required onClick={handleListTime} />
                <i className="booking-schedule-time-icon fas fa-chevron-down" onClick={handleListTime}></i>
                <ol className="container-booking-time-item hideItem" key="" >
                    <li value="01" onClick={handleSelectionTime}>01:00 AM</li>
                    <li value="02" onClick={handleSelectionTime}>02:00 AM</li>
                    <li value="03" onClick={handleSelectionTime}>03:00 AM</li>
                    <li value="04" onClick={handleSelectionTime}>04:00 AM</li>
                    <li value="05" onClick={handleSelectionTime}>05:00 AM</li>
                    <li value="06" onClick={handleSelectionTime}>06:00 AM</li>
                    <li value="07" onClick={handleSelectionTime}>07:00 AM</li>
                    <li value="08" onClick={handleSelectionTime}>08:00 AM</li>
                    <li value="09" onClick={handleSelectionTime}>09:00 AM</li>
                    <li value="10" onClick={handleSelectionTime}>10:00 AM</li>
                    <li value="11" onClick={handleSelectionTime}>11:00 AM</li>
                    <li value="12" onClick={handleSelectionTime}>12:00 AM</li>
                    <li value="13" onClick={handleSelectionTime}>01:00 PM</li>
                    <li value="14" onClick={handleSelectionTime}>02:00 PM</li>
                    <li value="15" onClick={handleSelectionTime}>03:00 PM</li>
                    <li value="16" onClick={handleSelectionTime}>04:00 PM</li>
                    <li value="17" onClick={handleSelectionTime}>05:00 PM</li>
                    <li value="18" onClick={handleSelectionTime}>06:00 PM</li>
                    <li value="19" onClick={handleSelectionTime}>07:00 PM</li>
                    <li value="20" onClick={handleSelectionTime}>08:00 PM</li>
                    <li value="21" onClick={handleSelectionTime}>09:00 PM</li>
                    <li value="22" onClick={handleSelectionTime}>10:00 PM</li>
                    <li value="23" onClick={handleSelectionTime}>11:00 PM</li>
                    <li value="00" onClick={handleSelectionTime}>12:00 PM</li>
                </ol>
            </div>
        </div>
    )
}