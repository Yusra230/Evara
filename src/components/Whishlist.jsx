import { Link } from "react-router-dom";
import CartImgNamePrice from "./CartImg,name,price";
import CartRow from "./CartRow";
import RemoveButton from "./RemoveButton";
import WhishlistRow from "./WhishlistRow";
import { useSelector } from "react-redux";

const Whishlist = () => {
    scrollTo(0,0);
    const wishListItemsIds = useSelector(store => store.wishList);
    const products = useSelector(store => store.products);

    let wishListItems = products.filter((product) => {
        const matchingCartItem = wishListItemsIds.find((item) => item.id === product.id);
        return matchingCartItem;
    });

    let updatedWishlistItems = [];
    for (let i = 0; i < wishListItems.length; i++) {
        updatedWishlistItems.push({ ...wishListItems[i], quantity: wishListItemsIds[i].quantity });
    }

    console.log(updatedWishlistItems);

    return <>
        <div className="container cart-container">
            <div className="column cart-column ">
                <div className="cart-wrapper">
                    <div className="cart-row">
                        <CartImgNamePrice></CartImgNamePrice>
                        <div className="cart-image text-center">Stock Status</div>
                        <div className="cart-image text-center">Action</div>
                        <RemoveButton></RemoveButton>
                    </div>
                    {updatedWishlistItems.length == 0 && <div><h3 className="py-4">Your Wishlist is Empty!</h3> <Link to={'/shop'} type="button" className="btn shop-now-btn px-4 me-md-2 mb-2" fdprocessedid="wy9v0s">Shop Now</Link></div>}
                    {updatedWishlistItems.map(item => <WhishlistRow key={item.id} item={item} />)}
                </div>
            </div>
        </div >
    </>
}

export default Whishlist;