import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { CartSliceActions } from "../store/cartSlice";
import { WhishlistSliceActions } from "../store/whishlistSlice";

const WhishlistRow = ({ item }) => {
    const dispatch = useDispatch();

    const addToCart = (itemId) => {
        dispatch(CartSliceActions.addToBag({ id: itemId, quantity: item.quantity }));
    };

    const deleteFromWishList = () => {
        console.log(`dlt button clicked for ${item.id}`);
        dispatch(WhishlistSliceActions.deleteFromWishList({ id: item.id }));
    };


    return <div className="cart-row">
        <div className="cart-image text-center"><img src={item.images[0]} alt="" /></div>
        <div className="cart-name text-center">{item.title}</div>
        <div className="cart-image text-center">${item.price}</div>
        <div className="cart-image text-center">In Stock</div>
        <div className="cart-image text-center"><button className="btn shop-now-btn" onClick={() => {
            addToCart(item.id);
        }}>Add to Cart</button></div>
        <div className="cart-image text-center"><button className="btn" onClick={deleteFromWishList}><RiDeleteBin5Fill className="delete-icon" /></button></div>
    </div>

}

export default WhishlistRow;