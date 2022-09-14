import { createSlice } from '@reduxjs/toolkit'

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    list: [],
  },
  reducers: {
    setList(state, action) {
      state.list = action.payload
    }
  }
})

export const CATALOG = state => state[catalogSlice.name].list