import { PiCrownSimple } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartSliceActions } from "../store/cartSlice";
import { useRef } from "react";
import { WhishlistSliceActions } from "../store/whishlistSlice";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";

const ItemDetails = () => {
  scrollTo(0, 0);
  const [wishListClicked, setWishListClicked] = useState(false);

  const dispatch = useDispatch();
  const idElement = useRef();

  const addToCart = (itemId) => {
    const quantity = Number(idElement.current.value);
    console.log(`quantity : ${quantity}`);
    dispatch(CartSliceActions.addToBag({ id: itemId, quantity: Number(idElement.current.value) }));
  };

  const addToWishList = (itemId) => {
    const quantity = Number(idElement.current.value);
    console.log(`quantity : ${quantity}`);
    setWishListClicked(true);
    dispatch(WhishlistSliceActions.addToWishList({ id: itemId, quantity: Number(idElement.current.value) }));
  };

  const products = useSelector((store) => store.products);
  const params = useParams();

  const id = Number(params.id);
  // console.log(products[0].id);
  // console.log(typeof id);

  const foundProduct = products.find((product) => product.id === id);

  if (foundProduct) {
    console.log("foundProduct Found:", foundProduct);
  } else {
    console.log("Product not found with ID:", id);
  }

  const [image, setImage] = useState(false);

  const setImages = (imgIndex) => {
    console.log(imgIndex);
    setImage(imgIndex);
  }



  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-2">
      <div className="row align-items-start g-lg-5 py-5">
        <div className="col-lg-5 text-center text-lg-start mb-3">
          <img src={image ? foundProduct.images[image] : foundProduct.images[0]} alt="" class="img-fluid " width="700" height="500" />
          <div className="multiple-images-container">
            <img src={foundProduct.images[1]} onClick={() => setImages(1)} alt="" class="img-fluid multiple-images" width="100" height="100" />
            <img src={foundProduct.images[2]} onClick={() => setImages(2)} alt="" class="img-fluid multiple-images" width="100" height="100" />
            <img src={foundProduct.images[0]} onClick={() => setImages(0)} alt="" class="img-fluid multiple-images" width="100" height="100" /></div>
        </div>


        <div className="col-md-10 mx-auto col-lg-7">
          <h2 className="fw-bold lh-1 text-body-emphasis mb-3">
            {foundProduct.title}
          </h2>
          <p>
            Brand: <span>{foundProduct.brand}</span>
          </p>
          <div className="price item-price">
            <span className="current-price c-price">{foundProduct.price}</span>
            <span className="original-price">$100</span>
            <span className="discount">
              {foundProduct.discountPercentage} OFF
            </span>
          </div>
          <p className="">{foundProduct.description}</p>
          <p>
            <PiCrownSimple /> 1 year Brand Warranty
          </p>
          <p>
            <TbTruckDelivery /> 30 Days Delivery Policy
          </p>
          <p>
            <BsCashCoin /> Cash on Delivery Available
          </p>
          <input type="number" name="" id="" ref={idElement} className="quantity" defaultValue={1} />
          <button className="btn shop-now-btn" onClick={() => {
            addToCart(id);
          }} >Add to Cart</button>
          <button className="btn" onClick={() => {
            addToWishList(id);
          }}>
            {wishListClicked ? <FaHeart className="WhishlistIcon" /> : <FaRegHeart className="WhishlistIcon" />}
          </button>
          <p className="text-secondary py-3"><span className="fw">Availibilty: </span>Items in stock</p>
        </div>
      </div>
    </div>


  );
};

export default ItemDetails;
