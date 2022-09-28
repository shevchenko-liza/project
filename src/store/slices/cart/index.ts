import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ID = number | `${number}`

interface CartItem {
    id: ID
    count: number
}

interface CartState {
    opened: boolean
    list: {
        [key in ID]: CartItem
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        opened: false,
        list: {},
    } as CartState,
    reducers: {
        open(state) {
            state.opened = true
        },
        close(state) {
            state.opened = false
        },
        toggle(state) {
            state.opened = !state.opened
        },
        set(state, action: PayloadAction<CartItem>) {
            state.list[action.payload.id] = {
                id: action.payload.id,
                count: action.payload.count || 1,
            }
        },
        unset(state, action: PayloadAction<ID>) {
            delete state.list[action.payload]
        },
        increase(state, action: PayloadAction<ID>) {
            state.list[action.payload].count += 1
        },
        decrease(state, action: PayloadAction<ID>) {
            state.list[action.payload].count -= 1

            if (state.list[action.payload].count <= 0) {
                state.list[action.payload].count = 1
            }
        }
    }
})

interface State {
    [cartSlice.name]: CartState
}

export const CART = (state: State) => state[cartSlice.name]