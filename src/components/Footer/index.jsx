import React from "react";

import "./Footer.css";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div>
                    ©2021 - DigitalBooking
                </div>
                <div className="footer__icon">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>

            </footer>
        );
    }
}

export { Footer };