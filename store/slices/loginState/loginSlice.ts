import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userLogin:null,
}

export const loginSlice = createSlice({
    name:'loginState',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.userLogin = action.payload;
        },
      
    }
})
export const {setUser} = loginSlice.actions;
