import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import authTokenSlice from './slices/authTokenSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    authToken: authTokenSlice
  },
})