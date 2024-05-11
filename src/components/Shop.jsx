import FeaturedItem from "./FeaturedItem";
import { useSelector } from 'react-redux';


const Shop = () => {
    const products = useSelector(store => store.products);
    scrollTo(0,0);

    return <div className="container featured-items-container">
        {products.map(item => <FeaturedItem key={item.id} item={item}></FeaturedItem>)}
    </div>

}
export default Shop;