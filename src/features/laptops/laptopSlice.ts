import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState, LaptopData, LaptopsState, ThunkStatus } from '../../types';
import { client } from '../../api/client';

type LaptopsReducer = {}

const initialState = {
    data: [],
    status: ThunkStatus.IDLE,
    error: null,
};

export const fetchLaptops = createAsyncThunk<LaptopData[]>('laptops/fetchLaptops', async () => {
    const response = await client.get<LaptopData[]>('/api/laptops');

    return response.data;
});

const laptopSlice = createSlice<LaptopsState, LaptopsReducer>({
    name: 'laptops',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchLaptops.pending, (state) => {
                state.status = ThunkStatus.LOADING;
            })
            .addCase(fetchLaptops.fulfilled, (state, action) => {
                state.status = ThunkStatus.SUCCEEDED;
                state.data = state.data.concat(action.payload)
            })
    }
});

export const laptopsReducer = laptopSlice.reducer;
export const selectAllLaptops = (state: AppState): LaptopData[] => state.laptops.data;
