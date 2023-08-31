import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

const loadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    updateLoading: (state, action) => {
        state.value = action.payload;
    }
  }
});

export const {updateLoading} = loadingSlice.actions

export default loadingSlice.reducer