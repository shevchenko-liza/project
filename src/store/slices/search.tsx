import { createSlice } from "@reduxjs/toolkit";

interface CatalogState {
    opened: boolean
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        opened: false,
    },
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
    [searchSlice.name]: CatalogState
}

export const SEARCH_OPENED = (state: State) => state[searchSlice.name].opened
