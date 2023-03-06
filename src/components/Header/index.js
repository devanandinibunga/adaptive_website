import "./Header.scss";
import {FaChevronCircleRight} from "react-icons/fa";


function Header() {
    return(
        <div className="header-con">
                <div className="header-row-left">
                    <h1 className="header-heading">Illustration Design</h1>
                    <hr className="line"/>
                    <p className="header-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="header-btn">Get started <FaChevronCircleRight/></button>
                </div>
                <div className="header-row-right">
                    <img id="tilt" className="header-image" alt="headerImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg"/>
                </div>
            </div>
        
    );
}

export default Header;