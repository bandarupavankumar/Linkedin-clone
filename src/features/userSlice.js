import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';



export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle', // Assuming you want to manage status
    value: 0, // Assuming you want to manage a value
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { login,logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
