import { createSlice } from '@reduxjs/toolkit';

interface SliceState {
    items: string[]
}

const initialState: SliceState = {
    items: []
};

export default createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const cartItems = new Set(state.items);
            cartItems.add(payload);
            state.items = Array.from(cartItems);
        },
        clear: (state) => {
            state.items = [];
        }
    }
});
