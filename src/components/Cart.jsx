
import CartRow from "./CartRow";
import { RxUpdate } from "react-icons/rx";
import { TbShoppingCartPlus } from "react-icons/tb";
import CartDetails from "./CartDetails";
import CartImgNamePrice from "./CartImg,name,price";
import RemoveButton from "./RemoveButton";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartItemsSliceActions } from "../store/cartItems";


const Cart = () => {
    scrollTo(0,0);

    const products = useSelector(store => store.products);
    const cartItemIds = useSelector(store => store.cart);
    // console.log('cartItemIds');
    // console.log(cartItemIds);

    let finalCartItems = products.filter((product) => {
        const matchingCartItem = cartItemIds.find((cartItem) => cartItem.id === product.id);

        return matchingCartItem;
    });

    let updatedCartItems = [];
    for (let i = 0; i < finalCartItems.length; i++) {
        updatedCartItems.push({ ...finalCartItems[i], quantity: cartItemIds[i].quantity });
    }

    // console.log('finalCartItems');
    // console.log(finalCartItems);
    const dispatch = useDispatch();
    dispatch(CartItemsSliceActions.addCartItems(updatedCartItems));

    // console.log('updatedCartItems');
    // console.log(updatedCartItems);

    return <>
        <div className="container cart-container">
            <div className="column cart-column mb-3">
                <div className="cart-wrapper">
                    <div className="cart-row">
                        <CartImgNamePrice></CartImgNamePrice>
                        <div className="cart-image text-center">Quanity</div>
                        <div className="cart-image text-center">Sub Total</div>
                        <RemoveButton></RemoveButton>
                    </div>
                    {updatedCartItems.length == 0 && < h3 className="py-4">Your Cart is Empty!</h3>}
                    {updatedCartItems.map(item => <CartRow key={item.id} item={item}></CartRow>)}
                </div>

            </div>

            <Link to={'/shop'} className="btn shop-now-btn con-shopping"><TbShoppingCartPlus /> Continue Shopping</Link>
            <button className="btn shop-now-btn con-shopping"><RxUpdate /> Update Cart</button>
        </div>
        <CartDetails></CartDetails>
    </>
}


export default Cart;