import { createSlice } from "@reduxjs/toolkit";

interface CatalogState {
  opened: boolean
}

export const callbackSlice = createSlice({
  name: 'callback',
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
  [callbackSlice.name]: CatalogState
}

export const CALLBACK_OPENED = (state: State) => state[callbackSlice.name].opened
