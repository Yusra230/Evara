import { configureStore, createSlice } from '@reduxjs/toolkit';
import ProductsSlice from './productSlice';
import CategorySlice from './categorySlice';
import CartSlice from './cartSlice';
import SingleCategory from './singleCategory';
import CartItemsSlice from './cartItems';
import WhishlistSlice from './whishlistSlice';

const store = configureStore({
    reducer: {
        products: ProductsSlice.reducer,
        categories: CategorySlice.reducer,
        cart: CartSlice.reducer,
        singleCategory: SingleCategory.reducer,
        cartItems: CartItemsSlice.reducer,
        wishList: WhishlistSlice.reducer,
    }
})

export default store;

