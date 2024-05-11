import { TbShoppingBagPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { CartSliceActions } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartToast from "./Toast";


const FeaturedItem = ({ item }) => {
  const [showToast, setShowToast] = useState(false);

  const rating = Math.random() * 5;

  const dispatch = useDispatch();

  const addToCart = (itemId) => {
    dispatch(CartSliceActions.addToBag({ id: itemId, quantity: 1 }));
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const imageSrc = hovered ? item.images[1] : item.images[0]; // Dynamic image source

  return (
    <>
      <div className="featured-items text-black">
        <div className="img-container position-relative">
          <Link to={`/Evara/product/${item.id}`}>
            <img src={imageSrc} alt="" className={hovered ? 'hover-effect' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          </Link>
          <span className="badge">NEW</span>
        </div>

        <div className="item-name">{item.category.name}</div>
        <h6 className="item-title">{item.title}</h6>
        <div className="rating">
          <div>
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label key={index}>
                  <span
                    style={{
                      cursor: "pointer",

                      color: "#FEC408",

                      fontSize: "20px",
                    }}
                  >
                    {ratingValue <= rating ? "★" : "☆"}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="price">
          <span className="current-price">${item.price}</span>
          <span className="original-price">${item.price}</span>
          <span className="discount">0% off </span>
          <button
            className="addToBag-btn"
            onClick={() => {
              addToCart(item.id);
            }}
          >
            {" "}
            <TbShoppingBagPlus onClick={() => setShowToast(true)} />
          </button>
        </div>
      </div>

      {showToast && <CartToast setShowToast={setShowToast} />}

    </>
  );
};

export default FeaturedItem;
