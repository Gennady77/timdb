import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState, PersonData, PersonsState, ThunkStatus } from '../../types';
import { client } from '../../api/client'

type PersonsReducer = {};

const initialState = {
    persons: [],
    status: ThunkStatus.IDLE,
    error: null
};

export const fetchPersons = createAsyncThunk<PersonData[]>('persons/fetchPersons', async () => {
    const response = await client.get<PersonData[]>('/api/persons');

    return response.data;
});

const personsSlice = createSlice<PersonsState, PersonsReducer>({
    name: 'persons',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPersons.pending, (state) => {
                state.status = ThunkStatus.LOADING;
            })
            .addCase(fetchPersons.fulfilled, (state, action) => {
                state.status = ThunkStatus.SUCCEEDED;
                state.persons = state.persons.concat(action.payload);
            })
    }
});

export const personsReducer = personsSlice.reducer;
export const selectAllPersons = (state: AppState): PersonData[] => state.persons.persons;
