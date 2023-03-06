import "./Team.scss";
import {FaChevronCircleRight} from "react-icons/fa";

function Team(){
    return(
        <div className="team-container">
                    <h1 className="team-heading">Our Team</h1>
                    <p className="team-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="team-main-container">
                        <div id="tilt" className=" team-card-container">
                            <img className="team-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team1.jpg"/>
                            <div className="team-card-bottom-con">
                                <h1 className="team-card-heading">Jessica Swift</h1>
                                <p className="team-card-para">Manager</p>
                                <p className="team-card-para">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                                <button className="team-card-btn">View Profile<FaChevronCircleRight/></button>
                            </div>
                        </div>
                        <div id="tilt" className=" team-card-container">
                            <img className="team-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team2.jpg"/>
                            <div className="team-card-bottom-con">
                                <h1 className="team-card-heading">Ben Palmer</h1>
                                <p className="team-card-para">Designer</p>
                                <p className="team-card-para">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                                <button className="team-card-btn">View Profile<FaChevronCircleRight/></button>
                            </div>
                        </div>
                        <div id="tilt" className=" team-card-container">
                            <img className="team-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team3.jpg"/>
                            <div className="team-card-bottom-con">
                                <h1 className="team-card-heading">Adam Brown</h1>
                                <p className="team-card-para">Developer</p>
                                <p className="team-card-para">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                                <button className="team-card-btn">View Profile<span className="icon"><FaChevronCircleRight /></span></button>
                            </div>
                        </div>
                    </div>
            </div>
        
    );
}
export default Team;