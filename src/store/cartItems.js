import { createSlice } from '@reduxjs/toolkit';

const CartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers: {
        addCartItems: (state, action) => {
            return action.payload
        }
    }
});


export const CartItemsSliceActions = CartItemsSlice.actions;
export default CartItemsSlice;
