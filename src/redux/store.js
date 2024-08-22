import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exerciseSlice";
import userReducer from './reducers/userSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, exerciseReducer);
const persistUserReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: {
    exercise: persistedReducer,
    user: persistUserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Puedes necesitar esto si enfrentas problemas de serialización
    }),
});
export const persistor = persistStore(store);
export default store;
