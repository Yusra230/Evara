import TrendyItem from "./TrendyItem";
import { useSelector } from 'react-redux';

const TrendyItems = () => {

    const products = useSelector(store => store.products);
    let hotReleases = [products[0], products[2], products[4]];
    let dealsAndOutlets = [products[1], products[3], products[5]];
    let topSelling = [products[6], products[7], products[9]];
    let trendy = [products[10], products[11], products[12]];

    return <>
        <div className="container trendy-items-container">
            <div className="item-container">
                <span className="trendy-item-name">Hot Releases</span>
                {hotReleases.map((item) => (<TrendyItem key={item.id} item={item}></TrendyItem>))}
            </div>

            <div className="item-container">
                <span className="trendy-item-name">Deals & Outlet</span>
                {dealsAndOutlets.map((item) => (<TrendyItem key={item.id} item={item}></TrendyItem>))}
                
            </div>

            <div className="item-container">
                <span className="trendy-item-name">Top Selling</span>
                {topSelling.map((item) => (<TrendyItem key={item.id} item={item}></TrendyItem>))}
                
            </div>

            <div className="item-container">
                <span className="trendy-item-name">Trendy</span>
                {trendy.map((item) => (<TrendyItem key={item.id} item={item}></TrendyItem>))}
                
            </div>

        </div>
    </>
}

export default TrendyItems;