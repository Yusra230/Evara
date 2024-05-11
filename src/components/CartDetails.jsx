import { RxUpdate } from "react-icons/rx";
import { RiCouponLine } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const CartDetails = () => {
    const cartItems = useSelector(store => store.cartItems);
    console.log(cartItems);

    let totalPrice = 0;
    cartItems.map(item => {
        totalPrice += item.price * item.quantity;
    })

    const SHIPPING = 10;
    let total = totalPrice + SHIPPING;

    return <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center py-5">
            <div className="col-lg-7 text-lg-start">
                <h5 className=" fw-bold mb-3">Calculate Shipping</h5>
                <div className="row g-3">
                    <div className="col-lg-10 col-sm-7">
                        <input type="text" className="form-control" placeholder="State/Country" aria-label="City" />
                    </div>
                    <div className="col-lg-5 col-sm">
                        <input type="text" className="form-control" placeholder="City" aria-label="State" />
                    </div>
                    <div className="col-lg-5 col-sm">
                        <input type="text" className="form-control" placeholder="PostalCode/Zip" aria-label="Zip" />
                    </div>
                    <span><button className="btn shop-now-btn"><RxUpdate /> Update</button></span>

                    <form className="row row-cols-lg-auto g-3 align-items-center">
                        <div className="col-12">
                            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter your Coupon" />
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn shop-now-btn mb-5"><RiCouponLine /> Apply</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
                <h5 className=" fw-bold mb-3">Cart Totals</h5>
                <div className="input-group cart-total-input">
                    <span className="input-group-text col-6 ">Cart Sub Total</span>
                    <span className="input-group-text col-6 color fw">${totalPrice}</span>

                </div>
                <div className="input-group cart-total-input">
                    <span className="input-group-text col-6 ">Shipping</span>
                    <span className="input-group-text col-6 color fw">$10</span>

                </div>
                <div className="input-group cart-total-input">
                    <span className="input-group-text col-6">Total</span>
                    <span className="input-group-text col-6 color fw">${total}</span>

                </div>

                <button type="submit" className="btn shop-now-btn"><FaCalendarCheck /> Proceed to Checkout</button>
                <span></span>

            </div>
        </div>
    </div>
}

export default CartDetails;