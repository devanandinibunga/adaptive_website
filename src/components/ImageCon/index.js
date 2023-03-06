import "./ImageCon.scss";

import {AiFillPlusSquare} from "react-icons/ai";


function ImageCon(){
    return(
        <div className="image-container">
                <div className="image-inside-con">
                    <img className="image-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features4.jpg"/>
                    <hr className="line"/>
                    <div className="image-inside-bottom-con">
                        <div className="image-inside-bottom-btn-con">
                            <button className="image-card-btn">Photoshop</button>
                            <button className="image-card-btn">Illustrator</button>
                            <button className="image-card-btn">InDesign</button>
                        </div>
                        <div className="image-card-bottom-btn">
                            <button className="image-card-btn image-card-btn1">Get started<AiFillPlusSquare/></button>
                        </div>   
                    </div>    
                </div>
            </div>  
    );
}

export default ImageCon;