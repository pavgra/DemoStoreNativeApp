import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import catalog from './catalog';
import cart from './cart';

const store = configureStore({
    reducer: {
        catalog: catalog.reducer,
        cart: cart.reducer,
    },
    middleware: [
        ...getDefaultMiddleware(),
    ],
});

export type RootState = ReturnType<typeof store.getState>

const actions = {
    catalog: catalog.actions,
    cart: cart.actions,
};

export {
    actions,
    store,
};
