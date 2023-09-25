import {configureStore} from '@reduxjs/toolkit';
import {categoriasSlice} from './slices/categorias';
import {loginSlice} from './slices/loginState';
export const store = configureStore({
    reducer: {
        categoriaSelect:categoriasSlice.reducer,
        loginState:loginSlice.reducer,
    },
});