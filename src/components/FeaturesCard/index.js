import "./FeaturesCard.css";

function FeaturesCard({item}){
    return(
        <div id="tilt" className="features-card-container" style={{backgroundColor:item.bgcolor}} >
            <p className="features-card-para1">{item.para1}</p>
            <h2 className="features-card-heading">{item.heading}</h2>
            <img className="features-card-image" alt="cardImage" src={item.img}/>
            <div className="features-card-bottom-con">
                <button className="features-card-btn">Get started</button>
                <p className="features-card-para2">{item.para2}</p>
            </div>
        </div>
    );
}

export default FeaturesCard;