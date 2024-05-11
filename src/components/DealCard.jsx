import { Link } from "react-router-dom";

const DealCard = ({ DealCardObj }) => {
    return <div className="card">
        <img src={DealCardObj.pic} className="card-img" alt="Bootstrap Themes" height={'300'} loading="lazy"/>
        <div className="card-img-overlay">
            <h4 className="card-title color">{DealCardObj.title}</h4>
            <p className="text-secondary">Limited Quantities</p>
            <h6 className="text-secondary">{DealCardObj.para}</h6>
            <span className="current-price text-danger">{DealCardObj.currentPrice}</span>
            <span className="original-price">{DealCardObj.originalPrice}</span>
            <p className="card-text offer-text">Hurry up! Offer end in:</p>
            <div className="counter-container" >
                <div>
                    <button className="btn bg-color text-white ">02</button>
                    <p className="counter-time">Days</p>
                </div>
                <span className="colon">:</span>
                <div>
                    <button className="btn bg-color text-white ">22</button>
                    <p className="counter-time">Hours</p>
                </div>
                <span className="colon">:</span>
                <div>
                    <button className="btn bg-color text-white ">57</button>
                    <p className="counter-time">Mins</p>
                </div>
                <span className="colon">:</span>
                <div>
                    <button className="btn bg-color text-white ">24</button>
                    <p className="counter-time">Sec</p>
                </div>
            </div>
            <Link to={'/shop'} type="button" className="btn shop-now-btn2" fdprocessedid="wy9v0s">Shop Now</Link>

        </div>
    </div>
}

export default DealCard;