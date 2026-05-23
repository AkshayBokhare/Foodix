import Foodix_logo from '/src/assets/Foodix_logo.png';
import '../styles/header_layout.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const HeaderLayout = () => {


    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();


    return (
        <><div className="header">
            <div className="logo">
                <img src={Foodix_logo} alt="Foodix Logo" />
            </div>
            <div className="nav-items">
                <ul >
                    <li>Online Status : {onlineStatus ? "💚" : "❤️"}</li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/card">Card</NavLink></li>
                    <li><NavLink to="/tailwindcss">Tailwind Css</NavLink></li>

                    <button className="login-btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>

        </>
    );
};

export default HeaderLayout;