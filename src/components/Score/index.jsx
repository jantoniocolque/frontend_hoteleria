import { useState, useEffect } from 'react';
import "./Score.css"
export default function Score({ avgScore, scores }) {
    return (
        <div className="class-list__header__score">
            <div className="card-list__starts__score">
                {

                    [1, 2, 3, 4, 5].map(i => {
                        let colorIcon = i <= Math.round(avgScore) ? "card-list__info__category__icon fas fa-star icon-color" : "card-list__info__category__icon fas fa-star";
                        return (<span key={i} ><i className={colorIcon} ></i></span>)
                    })
                }

            </div>

            <div className="card-list__info__score">
                <div className="card-list__info__score__avg">
                    <h3 className="card-list__info__score__number">{Math.round(avgScore)}</h3><span>({scores ? scores.length : 0})</span>
                </div>
                {
                    ["Malo", "Regular", "Bueno", "Muy Bueno", "Excelente"].map((e, i) => {
                        return i === Math.round(avgScore) - 1 ? <h3 className="card-list__info__score__title">{e}</h3> : "";
                    })
                }

            </div>
        </div>
    )
}