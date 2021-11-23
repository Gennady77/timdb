import { configureStore } from '@reduxjs/toolkit';
import { laptopsReducer } from '../features/laptops/laptopSlice';
import { laptopModalReducer } from '../features/modals/laptopModalSlice';

export const store = configureStore({
    reducer: {
        laptops: laptopsReducer,
        laptopModal: laptopModalReducer,
    }
});
