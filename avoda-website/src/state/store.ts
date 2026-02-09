import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {requestParamentsSlice} from "./slices/RequestParamentsSlice.ts";

const rootReducer = combineReducers({
    requestParaments:requestParamentsSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer
});



//=======================
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch
