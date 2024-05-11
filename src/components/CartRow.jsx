import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { CartSliceActions } from "../store/cartSlice";


const CartRow = ({ item }) => {

    const dispatch = useDispatch();

    const deleteFromCart = () => {
        console.log(`dlt button clicked for ${item.id}`);
        dispatch(CartSliceActions.deleteFromBag({ id: item.id }));

    };

    return <div className="cart-row">
        <div className="cart-image text-center"><img src={item.images[0]} alt="" /></div>
        <div className="cart-name text-center">{item.title}</div>
        <div className="cart-image text-center">${item.price}</div>
        <div className="cart-image text-center">{item.quantity}</div>
        <div className="cart-image text-center">${item.price * item.quantity}</div>
        <div className="cart-image text-center"><button className="btn" onClick={deleteFromCart}><RiDeleteBin5Fill className="delete-icon" /></button></div>
    </div>

}

export default CartRow;