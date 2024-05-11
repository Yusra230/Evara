
import { useDispatch } from 'react-redux';
import { SingleCategoryActions } from "../store/singleCategory";


const Category = ({ category }) => {

    const dispatch = useDispatch();

    const categoryButton = (categoryId) => {
        console.log(`${categoryId} clicked`);
        dispatch(SingleCategoryActions.changeCategories(categoryId))
    }

    return <><div className="featured-books" onClick={() => categoryButton(category.id)}>
        <img src={category.image} alt="" />
        <h6 className="text-center">{category.name}</h6>
    </div>


    </>
}

export default Category;