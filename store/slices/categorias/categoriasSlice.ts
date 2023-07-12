import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    categoriaSelect:'todos',
}

export const categoriasSlice = createSlice({
    name:'categoriaSelect',
    initialState,
    reducers:{
        setCategoria:(state,action)=>{
            state.categoriaSelect = action.payload;
        },
      
    }
})
export const {setCategoria} = categoriasSlice.actions;
