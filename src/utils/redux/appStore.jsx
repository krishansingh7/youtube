import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer: {
        nav: navSlice,
        videos: videoSlice,
        chat: chatSlice,
    },
});

export default appStore;