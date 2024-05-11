import { Link } from "react-router-dom";

const HeroSection = () => {
    return <>

        <div className="container col-xl-10 col-xxl-8 px-4">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-6 text-center text-lg-start">
                    <h5>Hot Promotions</h5>
                    <h2 className=" display-6 fw-bold text-body-emphasis" >Fashion Trending</h2>
                    <h1 className="display-5 fw-bold hero-heading lh-1 mb-3">Great Collection</h1>
                    <p className="lead">Save more with Coupons & upto 20% OFF.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to={'/shop'} type="button" className="btn shop-now-btn btn-lg px-4 me-md-2 mb-5" fdprocessedid="wy9v0s">Shop Now</Link>
                    </div>
                </div>
                <div className="col-md-10 mx-auto col-lg-6">
                    <img src="home-img.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    </>
}
export default HeroSection;