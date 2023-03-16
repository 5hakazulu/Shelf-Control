import { configureStore } from '@reduxjs/toolkit'
import keywordReducer from '../features/keywordSlice'
export default configureStore({
    reducer: {
        keyword: keywordReducer,
    },
})