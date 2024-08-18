// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exerciseSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, exerciseReducer);

const store = configureStore({
  reducer: {
    exercise: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Puedes necesitar esto si enfrentas problemas de serialización
    }),
});
export const persistor = persistStore(store);
export default store;
