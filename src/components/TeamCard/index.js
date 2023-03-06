import "./TeamCard.css";

function TeamCard ({item}){
    return(
        <div id="tilt" className=" team-card-container">
            <img className="team-card-image" alt="cardImage" src={item.image}/>
            <div className="team-card-bottom-con">
                <h1 className="team-card-heading">{item.heading1}</h1>
                <p className="team-card-para">{item.heading2}</p>
                <p className="team-card-para">{item.para}</p>
                <button className="team-card-btn">View Profile</button>
            </div>
        </div>
    );
}

export default TeamCard;