import { createSlice } from '@reduxjs/toolkit';

const WhishlistSlice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addToWishList: (state, action) => {
            state.push(action.payload);
        },

        deleteFromWishList: (state, action) => {
            return state.filter(item => item.id != action.payload.id);
        }
    }
});

export const WhishlistSliceActions = WhishlistSlice.actions;
export default WhishlistSlice;
