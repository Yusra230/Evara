import { CiLogin } from "react-icons/ci";
import { RiCouponLine } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa6";
const LoginPage = () => {
    scrollTo(0, 0);
    return <div className="container col-xl-10 col-xxl-8 px-4">
        <div className="row align-items-center g-lg-1 py-5">
            <div className="col-md-10 mx-auto col-lg-7 text-lg-start" >
                <h5 className=" fw-bold mb-3">Login</h5>
                <div className="row g-3">
                    <div className="col-lg-10 col-sm-7 col-md-12">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                    </div>
                    <div className="col-lg-10 col-sm-7 col-md-12">
                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>

                    <span><button className="btn shop-now-btn mb-3"><CiLogin /> Login</button></span>

                </div>
            </div>


            <div className="col-md-10 mx-auto col-lg-5" >
                <h5 className=" fw-bold">Create an Account</h5>
                <div className="input-group mb-3">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username" />
                        <label htmlFor="floatingInputGroup1">Username</label>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Password" />
                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                </div>

                <button type="submit" className="btn shop-now-btn"><FaCalendarCheck /> Submit and Register</button>
                <span></span>

            </div>
        </div>
    </div>
}

export default LoginPage;