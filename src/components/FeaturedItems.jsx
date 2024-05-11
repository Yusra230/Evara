import FeaturedItem from "./FeaturedItem";
import { useSelector } from 'react-redux';

const FeaturedItems = () => {
    const products = useSelector(store => store.products);
    // console.log('Products');
    // console.log(products);

    let featuredProducts = [];

    for (let i = 0; i < 8; i++) {
        featuredProducts[i] = products[i];
    }


    return <>
        <div className="container">
            <button className="btn shop-now-btn featured-buttons">Featured</button>
            <button className="btn btn-secondary featured-buttons">Popular</button>
            <button className="btn s btn-secondary featured-buttons">New Added</button>
            <div className="featured-items-container">
                {featuredProducts.map(item => <FeaturedItem key={item.id} item={item}></FeaturedItem>)}
            </div>
        </div>
    </>
}

export default FeaturedItems;