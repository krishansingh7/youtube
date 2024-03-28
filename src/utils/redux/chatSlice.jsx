import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        Messages: [],
    },
    reducers:{
        addMessages: (state,action) => {
            state.Messages.splice(10,1)
            state.Messages.unshift(action.payload);
        },
    },
});

export const {addMessages} = chatSlice.actions;

export default chatSlice.reducer;