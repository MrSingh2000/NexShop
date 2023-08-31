import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import authTokenSlice from './slices/authTokenSlice'
import loadingSlice from './slices/loadingSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    authToken: authTokenSlice,
    isLoading: loadingSlice,
  },
})