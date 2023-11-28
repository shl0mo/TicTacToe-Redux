import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: 'matrix',
    initialState: {
        matrix: [],
        initialSymbol: '',
        turn: 0
    },
    reducers: {
        defineInitialSymbol (state, { payload }) {
            state.initialSymbol = payload.initialSymbol;
        },

    }
})

export default Slice.reducer;