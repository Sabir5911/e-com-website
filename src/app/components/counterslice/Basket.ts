'use client'
import { PRODUCTS } from '@/app/AllProducts/page'

import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import { client } from '../../../../sanity/lib/client'
import { RootState } from './store'
import { Image as IIMAGE } from 'sanity'
// const productCategory=createAsyncThunk('products/productsFetch',async(thunkapi:any)=>{

//     const res:any[]=await client.fetch(`*[_type=='product']`)  
//     console.log(res);
    
//   return(res) 
  
//   }
//   )



// export interface CounterState {

//   totalvalue: number
//   products:[]
//   totalquantity:number
//   value: number
// } 

// const initialState: CounterState = {
//  products:[],
//  totalquantity:0,
//  totalvalue:0,
//  value:0
// } 
// export const counterSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value +=1
//     },
//     decrement: (state) => {
//         if(state.value<=0){
//             state.value = 1

//         }
//       state.value -= 1
      
//     },

//     Addtocart: (state,action) => { 
//    state.totalquantity+=state.value
//    state.totalquantity+=action.payload.quantity;   
// console.log(state);



//     },
//     removefromcart: (state,action) => {

//       state.totalquantity-=action.payload.quantity;      

//     },
  
//   },
  
//   })

// export const cartActions = counterSlice.actions

// export default counterSlice.reducer

import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ product: any; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
        state.totalAmount +
        action.payload.quantity * action.payload.product.price;

      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },

    removeFromCart(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      state.totalQuantity--;

      state.totalAmount = state.totalAmount - existingItem?.price!;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productId);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem?.price!;
      }
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

