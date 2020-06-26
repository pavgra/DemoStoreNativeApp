import { createSlice } from '@reduxjs/toolkit';

interface State {
    items: { name: string, price: number }[]
}

export default createSlice<State, any, string>({
    name: 'catalog',
    initialState: {
        items: [
            { name: 'Junior Developer', price: 60 },
            { name: 'Middle Developer', price: 100 },
        ]
    },
    reducers: {}
});
