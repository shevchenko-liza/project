import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: {},
    },
    reducers: {
        set(state, action) {
            state.list[action.payload.id] = {
                id: action.payload.id,
                count: action.payload.count || 1,
            }
        }
    }
})

export const CART = state => state[cartSlice.name]