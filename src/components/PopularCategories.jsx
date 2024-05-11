
import { useSelector } from 'react-redux';
import SingleCategory from "./FetchSingleCategory";
import CategoriesSlider from "./CategoriesSlider";

const PopularCategories = () => {
    const singleCategory = useSelector(store => store.singleCategory);
    // console.log(`${singleCategory} has been clicked`);

    const products = useSelector(store => store.products);

    let singleCategoryData = products.filter((item) => item.category.id === singleCategory);

    console.log(singleCategoryData);


    return <>
        <div className="container">
            <h3><span className="color">Popular</span> Categories</h3>
           <CategoriesSlider></CategoriesSlider>
        </div>

        {singleCategory && <SingleCategory singleCategoryData={singleCategoryData}></SingleCategory>}


    </>
}

export default PopularCategories;