import { createSlice } from '@reduxjs/toolkit';


const SingleCategory = createSlice({
    name: 'singleCategory',
    initialState: [],
    reducers: {

        changeCategories: (state, action) => {
            return action.payload;
        }
    }
})

export const SingleCategoryActions = SingleCategory.actions;
export default SingleCategory;
