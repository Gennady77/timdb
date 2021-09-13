import { createSlice } from '@reduxjs/toolkit'

export const personsSlice = createSlice({
    name: 'persons',
    initialState: {
        value: []
    },
    reducers: {
        fetchPersons: state => state.value
    }
});
