import { configureStore } from '@reduxjs/toolkit'

import { catalogSlice } from './slices/catalog'
import { cartSlice } from './slices/cart'
import { callbackSlice } from './slices/callback'
import { searchSlice } from './slices/search'
export const store = configureStore({
    reducer: {
        [catalogSlice.name]: catalogSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [callbackSlice.name]: callbackSlice.reducer,
        [searchSlice.name]: searchSlice.reducer,
    }

})