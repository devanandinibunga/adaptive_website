import "./OurSkills.scss";

function OurSkills(){
    return(
        <div className="our-skills-main-container">
                <div className="our-skills-container">
                    <h1 className="our-skills-caption">Our Skills</h1>
                    <p className="our-skills-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis, faucibus at tincidunt vel, ultrices vitae mauris. Pellentesque ante. Praesent posuere dignissim nibh in finibus. Nunc rutrum nibh pellentesque, viverra dolor quis, sollicitudin libero.
                    </p>
                </div>
                <div className="progress-container">
                            <div className="progress">
                                <div className="skills-progress-details-container">
                                    <h5 className="skills-progress-caption">Illustration Design</h5>
                                    <h5 className="skills-progress-caption">92%</h5>
                                </div>
                                <progress min="0" max="100" value="92" className="progress-bar" />
                            </div>
                            <div className="progress">
                                <div className="skills-progress-details-container">
                                    <h5 className="skills-progress-caption">Digital Art</h5>
                                    <h5 className="skills-progress-caption">71%</h5>
                                </div>
                                <progress min="0" max="100" value="71" className="progress-bar" />
                            </div>
                            <div className="progress">
                                <div className="skills-progress-details-container">
                                    <h5 className="skills-progress-caption">Print Design</h5>
                                    <h5 className="skills-progress-caption">53%</h5>
                                </div>
                                <progress min="0" max="100" value="53" className="progress-bar" />
                            </div>
                </div>
            </div>
    );
}
export default OurSkills;