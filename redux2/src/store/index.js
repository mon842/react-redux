import { configureStore,createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {value:0},
    reducers:{
        plus(state){
            state.value += 1;
        },
        minus(state){
            state.value -= 1;
        },
        plusby(state,action){
            state.value += action.payload;
        }
    }
});

export const actions = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
})


