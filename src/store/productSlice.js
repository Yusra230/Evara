import { createSlice } from '@reduxjs/toolkit';
import Product from '../data/items';
const ProductsSlice = createSlice({
    name: 'products',
    initialState: Product,
    reducers: {
        addInitialProducts: (state , action) => {
            return action.payload;
        }
    }
});

export const ProductsActions = ProductsSlice.actions;

export default ProductsSlice;
