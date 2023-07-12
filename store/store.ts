import {configureStore} from '@reduxjs/toolkit';
import {categoriasSlice} from './slices/categorias';

export const store = configureStore({
    reducer: {
        categoriaSelect:categoriasSlice.reducer
    },
});