import { configureStore } from '@reduxjs/toolkit'

import { burgerSlice } from './slices/burgers'
import { cartSlice } from './slices/cart'
import { dishSlice } from './slices/dish'

export const store = configureStore({
    reducer: {
        [burgerSlice.name]: burgerSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [dishSlice.name]: dishSlice.reducer
    }
})