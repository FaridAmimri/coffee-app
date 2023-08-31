/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  quantity: 0,
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    removeFromCart: (state, action) => {
      state.quantity -= 1
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      )
      state.total -= action.payload.price * action.payload.quantity
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
