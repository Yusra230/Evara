import { createSlice } from '@reduxjs/toolkit';


const CategorySlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        addCategories: (state, action) => {
            return action.payload;
        },

        changeCategories: (state, action) => {
            return action.payload;
        }
    }
})

export const CategorySliceActions = CategorySlice.actions;
export default CategorySlice;
