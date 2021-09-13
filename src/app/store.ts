import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    persons: personsReducer
});
