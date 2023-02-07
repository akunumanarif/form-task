import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./feaures/productReducer";
import userSlice from "./feaures/userReducer";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["me"],
// };

// const rootReducer = combineReducers({
//   me: userSlice,
//   product: productSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   //devTools: process.env.NODE_ENV !== "production",
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    product: productSlice,
    me: userSlice,
  },
});

// export default store;
