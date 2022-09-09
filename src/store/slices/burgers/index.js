import { createSlice } from '@reduxjs/toolkit'

import { BURGERS as BURGERS_LIST } from './constants'

export const burgerSlice = createSlice({
  name: 'burgers',
  initialState: {
    list: BURGERS_LIST,
  },
  reducers: {}
})

export const BURGERS = state => state[burgerSlice.name].list