import { configureStore } from '@reduxjs/toolkit'

import { catalogSlice } from './slices/catalog'
import { cartSlice } from './slices/cart'
import { callbackSlice } from './slices/callback'
import { searchSlice } from './slices/search'
import { headerStyleSlice } from './slices/header-styles'
import { topFormSlice } from './slices/top-form'

export const store = configureStore({
    reducer: {
        [catalogSlice.name]: catalogSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [callbackSlice.name]: callbackSlice.reducer,
        [searchSlice.name]: searchSlice.reducer,
        [headerStyleSlice.name]: headerStyleSlice.reducer,
        [topFormSlice.name]: topFormSlice.reducer,
    }
})