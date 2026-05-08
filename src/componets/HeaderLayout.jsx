import Foodix_logo from '/src/assets/Foodix_logo.png';
import '../styles/header_layout.css';
import { useState } from 'react';

const HeaderLayout = () => {


    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <><div className="header">
            <div className="logo">
                <img src={Foodix_logo} alt="Foodix Logo" />
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Card</li>
                    <button className="login-btn" onClick={ () => {
                        btnNameReact=== "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
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