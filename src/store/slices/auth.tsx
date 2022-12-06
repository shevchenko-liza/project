import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    opened: boolean
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        opened: false,
    }as AuthState,
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
    }
})

interface State {
    [authSlice.name]: AuthState
}

export const AUTH = (state: State) => state[authSlice.name]
