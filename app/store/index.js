import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import dashboardReducer from "./slices/dashboardSlice"
const makeStore = () => configureStore({
    reducer: {
        dashboard: dashboardReducer,
    },
    devTools: true
})

export const wrapper = createWrapper(makeStore)