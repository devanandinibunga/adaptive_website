import "./Subscribe.scss"

function Subscribe(){
    return(
        <div className="subscribe-main-con">
        <h1 className="subscribe-heading">Subscribe</h1>
        <form id="tilt" className="subscribe-container">
            <input className="subscribe-input" type="text" placeholder="Name"/>
            <input className="subscribe-input" type="text" placeholder="E-mail"/>
            <button className="subscribe-btn" >Subscribe</button>
        </form>
    </div>
        
    );
}
export default Subscribe;