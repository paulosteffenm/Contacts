import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../reducers/contact.reducer';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch