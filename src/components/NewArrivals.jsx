import FeaturedItem from "./FeaturedItem";
import { useSelector } from "react-redux";
import Slider from "./Slider";

const NewArrivals = () => {
  const products = useSelector((store) => store.products);
  // console.log(products);

  let newArrivalsProducts = [];

  for (let i = 0; i < 8; i++) {
    newArrivalsProducts[i] = products[i];
  }

  return <>
    <div className="container newArrivals-items-container">
      <h3>
        <span className="color">New</span> Arrivals
      </h3>
      <div className="container">
        <Slider></Slider>
      </div>
    </div>




  </>
};

export default NewArrivals;
