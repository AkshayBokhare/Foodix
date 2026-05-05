import Foodix_logo from '/src/assets/Foodix_logo.png';
import '../styles/header_layout.css';

const HeaderLayout = () => {
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
                </ul>
            </div>
        </div>
          
        </>
    );
};

export default HeaderLayout;