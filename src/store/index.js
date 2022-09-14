import { configureStore } from '@reduxjs/toolkit'

import { catalogSlice } from './slices/catalog'
import { cartSlice } from './slices/cart'

export const store = configureStore({
    reducer: {
        [catalogSlice.name]: catalogSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    }
})