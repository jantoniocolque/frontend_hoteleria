import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserLogged from "../UserLogged";
import "./MenuMobile.css";
import SessionContextProvider from "../../context/sessionContext.js";
export default function MenuMobile({ setIsSubmitted }) {
  const history = useNavigate();
  const { user, setToken } = useContext(SessionContextProvider);
  const handleLogout = () => {
    setToken(null);
    setIsSubmitted(false);
    history("/");
  }
  return (
    <React.StrictMode>
      <div id="menu_mini">
        <nav id="menu_sidebar">
          <div className="menu_sidebar__header">
            {
              user !== null && user !== undefined ?
                <UserLogged user={user} setIsSubmitted={setIsSubmitted} />
                :
                "MENU"
            }

          </div>


          {
            user !== null && user !== undefined ?
              <>

                <p>¿Desea <span className="logout" onClick={handleLogout}>cerrar sesión</span>?</p>
                <hr />
              </>
              :
              <ul>
                <li><Link to="/signin">Crear Cuenta</Link></li>
                <hr />
                <li><Link to="/login">Iniciar Sesión</Link></li>
              </ul>
          }

          <div className="menu_sidebar__icon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </nav>
        <div id="menu-mobile">
          <Link to="#" id="menu_on" className="">
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>
      </div>
    </React.StrictMode>

  );
}




