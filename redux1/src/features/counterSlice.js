import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 10,
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
    plusbyvalue: (state,action) => {
      state.value+=action.payload;
    }
  },

});

export const { plus, minus,plusbyvalue} = counterSlice.actions;



export default counterSlice.reducer;
