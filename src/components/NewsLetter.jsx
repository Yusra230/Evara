import { MdOutlineMarkEmailRead } from "react-icons/md"

const NewsLetter = () => {
    return <>

        <div className="news-letter">

            <div className="signup fw">
                <MdOutlineMarkEmailRead className="fw email-icon" /> <span className="news-letter-text">Sign up to NewsLetter</span>
            </div>

            <div className="fw coupon">
               <span>... and recieve $25 coupon for first Shopping</span> 
            </div>

            <div className="subscribe">
                <div className="input-group news-form">
                    <input type="email" className="form-control " placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn shop-now-btn " type="button" id="button-addon2">Subscribe</button>
                </div>
            </div>

        </div>
    </>
}

export default NewsLetter;