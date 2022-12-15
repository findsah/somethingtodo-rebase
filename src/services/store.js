import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// import AuthSlice from "./shared/shredSlice";
import createEventSlice from '../pages/front-end/create-event/service/CreateEventSlice'
import blogSlice from "../pages/front-end/blog/config/BlogSlice";

const reducers = combineReducers({
  // AuthSlice,
  createEventSlice,
  blogSlice

});

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["AuthSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
