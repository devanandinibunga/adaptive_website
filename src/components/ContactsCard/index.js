import "./ContactsCard.css";
function ContactsCard({item}){
    return(
        <div id="tilt" className="contacts-card-container">          
            <p className="contacts-card-icon">{item.icon}</p>
            <div className="col-sm-12 col-md-6 col-lg-6 d-block contacts-card-side-con"> 
                {/* <FontAwesomeIcon icon="fa-solid fa-phone" />  */}
                <h1 className="contacts-card-heading">{item.heading}</h1>
                <p className="contacts-card-para">{item.para}</p>
            </div>
        </div>
    );
}

export default ContactsCard;