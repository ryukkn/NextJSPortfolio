'use client';


import { createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
    value : any;
}

const initialState: GlobalState = {
    value: null,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setValue: (state, action) => {state.value = action.payload},
    }
})

export const {setValue} = globalSlice.actions;

export default globalSlice.reducer; 