import "./Contacts.scss";
import {FaPhoneAlt,FaListUl} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
// import {HiOutlineGlobe} from 'react-icons/hi';



function Contacts(){
    return(
        <div className="contacts-container">
                <h1 className="contacts-heading">Contacts</h1>
                <p className="contacts-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="contacts-main-container">
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FaPhoneAlt className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Phone</h1>
                            <a href="/"  className="contacts-card-para">0 (800) 123 45 67</a>
                        </div>
                    </div>
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FiMail className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Email</h1>
                            <a href="/" className="contacts-card-para">info@site.com</a>
                        </div>
                    </div>
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FaPhoneAlt className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Address</h1>
                            <p className="contacts-card-para">4100 Ross Street, Okawville, IL</p>
                        </div>
                    </div>
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FaListUl className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Working Hours</h1>
                            <p className="contacts-card-para">9:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contacts;