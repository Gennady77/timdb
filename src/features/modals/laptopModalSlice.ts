import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, LaptopModalState } from '../../types';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';

type LaptopModalReducer = {
    laptopModalShow: CaseReducer<LaptopModalState, PayloadAction<boolean>>;
};

const initialState = {
    shown: false
};

const laptopModalSlice = createSlice<LaptopModalState, LaptopModalReducer > ({
    name: 'laptopModal',
    initialState,
    reducers: {
        laptopModalShow: (state, action) => {
            state.shown = action.payload;
        }
    }
});

export const laptopModalReducer = laptopModalSlice.reducer;
export const { laptopModalShow } = laptopModalSlice.actions;
export const selectLaptopModalShown = (state: AppState): boolean => state.laptopModal.shown;
