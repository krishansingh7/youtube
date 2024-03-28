import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        HomeVideos: [],
        categoryVideos: [],
        category: "All",
    },
    reducers:{
        addVideos: (state,action) => {
            state.HomeVideos = action.payload;
            // state.HomeVideos.push(action.payload)
        },
        setCategory: (state,action) => {
            state.category = action.payload;
        },
        addCategory: (state,action) => {
            // const items = category.find((item) => item.id === action.payload.id);
            // if(items){
            //     return false;
            // }else{
            //     state.HomeVideos = action.payload;
            // }
            // state.categoryVideos = action.payload;
            // state.HomeVideos = action.payload;
        },
    },
});

export const {addVideos,setCategory,addCategory} = videoSlice.actions;
export default videoSlice.reducer;