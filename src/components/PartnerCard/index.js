import "./PartnerCard.css";

function PartnerCard ({item}){
    return(
        <div id="tilt" className="partner-card-container">
            <img className="partner-card-image" alt="cardImage" src={item.image}/>
            <h1 className="partner-card-heading">{item.heading1}</h1>
            <p className="partner-card-para">{item.heading2}</p>
            <p className="partner-card-para">{item.para}</p>
            <button className="partner-card-btn">Learn more</button>
        </div>
    );
}

export default PartnerCard;