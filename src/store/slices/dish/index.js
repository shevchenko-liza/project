import { createSlice } from '@reduxjs/toolkit'

import { DISH as DISH_LIST } from './dishConstants'

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        list: DISH_LIST,
    },
    reducers: {}
})

export const DISH = state => state[dishSlice.name].list