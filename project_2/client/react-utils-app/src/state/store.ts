import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.ts";
import todoReducer from "./todoSlice.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
