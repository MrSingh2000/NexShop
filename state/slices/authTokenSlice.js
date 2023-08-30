import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ""
}

const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    updateAuthToken: (state, action) => {
        state.value = action.payload;
    }
  }
});

export const {updateAuthToken} = authTokenSlice.actions

export default authTokenSlice.reducer