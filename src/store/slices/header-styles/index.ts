import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CSSProperties } from "react";

interface HeaderStyleState {
  properties: CSSProperties
}

export const headerStyleSlice = createSlice({
  name: 'header-style',
  initialState: {
    properties: {}
  } as HeaderStyleState,
  reducers: {
    set(state, action: PayloadAction<CSSProperties>) {
      state.properties = action.payload
    },
    unset(state) {
      state.properties = {}
    }
  },
})

interface State {
  [headerStyleSlice.name]: HeaderStyleState
}

export const HEADER_STYLE = (state: State) => state[headerStyleSlice.name].properties