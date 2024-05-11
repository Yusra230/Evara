import FeaturedItem from "./FeaturedItem";

const SingleCategory = ({ singleCategoryData }) => {

    return <>
        <div className="container mb-2">
            <div className="featured-items-container">
                {singleCategoryData.map(item => <FeaturedItem key={item.id} item={item}></FeaturedItem>)}
            </div>

        </div>
    </>
}

export default SingleCategory;