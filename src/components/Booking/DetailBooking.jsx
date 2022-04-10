import "./DetailBooking.css";

export default function DetailBooking({ product, startDate, endDate, handleSubmitReserve, error, buttonText }) {
    console.log(product);
    return (
        <div className="booking-details">
            <div className="booking-details-img">
                <h2 className="booking-title">Detalle de la reserva</h2>
                <img src={product.images[0]?.url} className="booking-details-image" alt="" />
            </div>
            <div className="booking-details-info">
                <div className="booking-details__product">
                    <h3 className="booking-details__product__category">{product.category.title}</h3>
                    <h2 className="booking-details-title">{product.name}</h2>
                    <div className="booking-details__product__score">
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <div className="booking-details__product__location">
                        <i className="booking-details__product__location__icon fas fa-map-marker-alt"></i>
                        <div className="booking-details__product__location__title">{product.location.city}, {product.location.country}</div>
                    </div>
                </div>
                <hr className="booking-details-hr" />
                <div className="booking-details-check">
                    <h3>Check in</h3>
                    <p>{startDate}</p>
                </div>
                <hr className="booking-details-hr" />
                <div className="booking-details-check">
                    <h3>Check out</h3>
                    <p>{endDate}</p>
                </div>
                <hr className="booking-details-hr" />
                <button type="submit" className="booking-details-button button-1" id="booking__button" onClick={handleSubmitReserve}>{buttonText}</button>
            </div>
        </div>
    )

}