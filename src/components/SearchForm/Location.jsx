import './Location.css';
import { useState, useEffect } from 'react';
import getData from '../../assets/js/getData';
function Location({ zIndexCalendar }) {
    const [locations, setLocations] = useState([]);
    const [showList, setShowList] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const handleListLocation = (e) => {
        setShowList(!showList);
    }
    const handleSelectLocation = (e, id) => {
        const title_location = document.querySelector(".container-location__title");
        if (e.target.childNodes[1]?.textContent !== undefined && e.target.childNodes[3]?.textContent !== undefined) {
            title_location.value = e.target.childNodes[1]?.textContent + ", " + e.target.childNodes[3]?.textContent;
            title_location.style.color = "var(--dark-color)";
            title_location.style.fontWeight = 600;
            title_location.setAttribute("id", id);
        }
    }
    const resetItemLocation = () => {
        const listLocations = document.querySelectorAll(".container-location__list__item");
        listLocations.forEach(item => {
            item.classList.remove("hideItem");
        })
    }
    const handleChangeLocation = (e) => {
        const listLocations = document.querySelectorAll(".container-location__list__item");
        listLocations.forEach(item => {
            if (!item.childNodes[1]?.textContent.toLowerCase().includes(e.target.value.toLowerCase()) && !item.childNodes[3]?.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                item.classList.add("hideItem");
            }
        })
        if (e.target.value === "")
            resetItemLocation()
    }
    useEffect(() => {
        getData("/api/v1/location")
            .then(data => {
                if (data) {
                    setIsLoading(false);
                }
                setLocations(data);
            })
        window.addEventListener("click", (e) => {
            const inputLocation = document.querySelector(".container-location");
            const titleLocation = document.querySelector(".container-location__title");
            const list = document.querySelector(".container-location__list");

            if (e.target !== inputLocation && e.target !== list && e.target !== titleLocation) {
                setShowList(false);
                zIndexCalendar(1);
            }
        })
    }, [])

    useEffect(() => {
        const list = document.querySelector(".container-location__list");

        if (showList) {
            resetItemLocation()
            list.classList.remove("hideItem");
        } else {
            list.classList.add("hideItem");
        }
        zIndexCalendar(showList ? -1 : 1);
    }, [showList])
    return (
        <div className="container-location" onClick={handleListLocation}>
            <i class="fas fa-map-marker-alt"></i>
            <input type="text" className="container-location__title" placeholder="¿A dónde vamos?" onChange={handleChangeLocation} />
            {/* <h2 className="container-location__title">¿A dónde vamos?</h2> */}
            <ul className="container-location__list hideItem">
                {
                    isLoading || locations.length === 0 ?
                        <li> Cargando ... </li>
                        :
                        locations.map((location, index) => {
                            return (
                                <li className="container-location__list__item" key={index} onClick={(e) => { handleSelectLocation(e, location.locationId) }}>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span id="city" className="container-location__list-name"><strong>{location.city}</strong></span>
                                    <br />
                                    <span className="container-location__list-country">{location.country}</span>
                                </li>
                            )
                        })
                }
            </ul>
        </div >
    )
}

export default Location;