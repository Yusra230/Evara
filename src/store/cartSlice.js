import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload);
        },

        deleteFromBag: (state, action) => {
            return state.filter(item => item.id != action.payload.id);
        }
    }
});

export const CartSliceActions = CartSlice.actions;
export default CartSlice;
