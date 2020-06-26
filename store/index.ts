import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import catalog from './catalog';

const store = configureStore({
    reducer: {
        catalog: catalog.reducer,
    },
    middleware: [
        ...getDefaultMiddleware(),
    ],
});

export type RootState = ReturnType<typeof store.getState>

export {
    store,
};
