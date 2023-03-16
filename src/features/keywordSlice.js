import { createSlice } from '@reduxjs/toolkit'

export const keywordSlice = createSlice({
    name: 'keyword',
    initialState: {
        searchString: null,
    },
    reducers: {
        setSearchString: (state, action) => {
            state.searchString = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {  setSearchString } = keywordSlice.actions

export default keywordSlice.reducer