import { createSlice } from '@reduxjs/toolkit';

interface SliceState {
    items: CatalogItem[]
}

const initialState: SliceState = {
    items: [
        { name: 'Apples', price: 5 },
        { name: 'Oranges', price: 7 },
        { name: 'Bananas', price: 2 },
    ]
};

export default createSlice({
    name: 'catalog',
    initialState,
    reducers: {}
});
