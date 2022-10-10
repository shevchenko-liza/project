import { createSlice } from "@reduxjs/toolkit";

interface CallbackState {
 
}

export const callbackSlice = createSlice({
  name: 'callback',
  initialState: {
    opened: false,
  } as CallbackState,
  reducers: {
    
  }
})

interface State {
  [callbackSlice.name]: CallbackState
}


