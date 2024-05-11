import { Link } from "react-router-dom";

const TrendyItem = ({ item }) => {
  // console.log(item);
  return (
    <div className="container2">
      <Link to={`/product/${item.id}`}>
        <img src={item ? item.images[0] : "category-1.jpg"} alt="" />
        </Link>
      <div className="set-mg set-padding">
        <h6 className="trendy-item-title">{item ? item.title : "item"}</h6>
        <span className="current-price">${item ? item.price : "$1000"}</span>
        <span className="original-price">$2000</span>
      </div>
    </div>
  );
};

export default TrendyItem;
