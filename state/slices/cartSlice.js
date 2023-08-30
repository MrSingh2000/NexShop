import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer