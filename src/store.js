import { createStore } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootred from "./redux/reducer/main";
import reduser from "./Reducer/Reduser";
import api from "./Reducer/middleware/Api";

const store = configureStore({
    reducer: rootred,

    // reducer : reduser,
    middleware: [...getDefaultMiddleware(), api]

}
)

export default store; 