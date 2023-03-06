import "./Features.scss";
import {FaChevronCircleRight} from "react-icons/fa";




function Features(){
    return(
        <div className="features-container">
                <h1 className="features-heading">Our features</h1>
                <div className="features-main-container">
                    <div id="tilt" className="features-card-container features-card-container1" >
                        <p className="features-card-para1">Professional Tools Kit</p>
                        <h2 className="features-card-heading">Illustration Design</h2>
                        <img className="features-card-image" alt="cardImage" src=	"https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features1.jpg"/>
                        <div className="features-card-bottom-con">
                            <button className="features-card-btn">Get started<FaChevronCircleRight/></button>
                            <p className="features-card-para2">12$</p>
                        </div>
                    </div>
                    <div id="tilt" className="features-card-container features-card-container2" >
                        <p className="features-card-para1">Professional Tools Kit</p>
                        <h2 className="features-card-heading">Digital Art</h2>
                        <img className="features-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features2.jpg"/>
                        <div className="features-card-bottom-con">
                            <button className="features-card-btn">Get started<FaChevronCircleRight/></button>
                            <p className="features-card-para2">18$</p>
                        </div>
                    </div>
                    <div id="tilt" className="features-card-container features-card-container3" >
                        <p className="features-card-para1">Professional Tools Kit</p>
                        <h2 className="features-card-heading">Print Design</h2>
                        <img className="features-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg"/>
                        <div className="features-card-bottom-con">
                            <button className="features-card-btn">Get started<FaChevronCircleRight/></button>
                            <p className="features-card-para2">14$</p>
                        </div>
                    </div>
                    </div>
            </div>

    );
}
export default Features;