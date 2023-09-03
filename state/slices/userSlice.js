import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
        state.email = action.payload.email,
        state.name = action.payload.fullName
    }
  }
});

export const {updateUser} = userSlice.actions

export default userSlice.reducer