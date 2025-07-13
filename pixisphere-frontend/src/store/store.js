import {configureStore} from "@reduxjs/toolkit";
import photographerReducer from './photographerSlice';
import searchReducer from "./SearchSlice";

export const store = configureStore({
    reducer: {
        photographer: photographerReducer,
        search: searchReducer,
    }
})