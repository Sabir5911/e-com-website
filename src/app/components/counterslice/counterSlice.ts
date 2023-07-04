'use client'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  totalvalue: number
  products:[]
  totalquantity:number
  value: number
}

const initialState: CounterState = {
 products:[],
 totalquantity:0,
 totalvalue:0,
 value:0
 

 
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1

    },
    decrement: (state) => {
        if(state.value==0){
            state.value = 1

        }
      state.value -= 1
      
    },

    Addtocart: (state,action) => {  
state.totalquantity=state.value
state.totalquantity+=action.payload.quantity;      
    },
    removefromcart: (state,action) => {
      state.totalquantity=state.value

      state.totalquantity+=action.payload.quantity;      

    },
    clearall: (state, action: PayloadAction<number>) => {
      state=initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer