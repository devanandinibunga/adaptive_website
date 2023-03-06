import "./Cards.scss";

function Cards(){
    return(
        <div className="cards-container">
        <div className="cards-left-con">
            <h1 className="cards-left-heading">Professional Illustration Design</h1>
            <img className="cards-image" alt="cardsImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features2.jpg"/>
            <hr className="line"/>
            <div className="cards-left-bottom-con">
                <div className="cards-left-bottom-left">
                    <button className="cards-left-bottom-left-btn1">Design</button>
                    <button className="cards-left-bottom-left-btn2">Photoshop</button>
                </div>
                {/* <div> */}
                <button className="cards-left-bottom-right-btn">Get started</button>
                {/* </div> */}
            </div>    
        </div>
        <div className="cards-right-con">
            <div className="cards-right-top-con">
                <p className="cards-right-top-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="cards-left-bottom-left-btn2">Read more</button>
            </div>
            <div className="cards-right-bottom-con">
                <p className="cards-right-top-para">Nullam consectetur dolor vel ex ullamcorper, non viverra neque aliquet. Vivamus sed nulla rhoncus.</p>
            </div>
        </div>
</div>
       
    );
}

export default Cards;