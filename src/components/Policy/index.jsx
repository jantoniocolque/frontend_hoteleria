import "./Policy.css";

function Policy() {
    return (
        <div className="product__toknow">
            <h2>Qué tenes que saber</h2>
            <hr />
            <div className="product__toknow-content">
                <div className="product__toknow-column">
                    <h3>Normas de la casa</h3>
                    <ul>
                        <li>Check-out:10:00</li>
                        <li>No se permiten fiestas</li>
                        <li>No fumar</li>
                    </ul>
                </div>
                <div className="product__toknow-column">
                    <h3>Salud y seguridad</h3>
                    <ul>
                        <li>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.</li>
                        <li>Detector de humo</li>
                        <li>Depósito de seguridad</li>
                    </ul>
                </div>
                <div className="product__toknow-column">
                    <h3>Política de cancelación</h3>
                    <ul>
                        <li>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Policy;