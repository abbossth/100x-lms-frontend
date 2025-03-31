import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // localStorage
import authReducer from '../slices/authSlice';
import { combineReducers } from 'redux';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // optional state reconciler
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor }
