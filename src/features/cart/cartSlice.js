import { createSlice } from "@reduxjs/toolkit";
import cartItem from "../../cartItems";

const initialState = {
  cartItems: cartItem,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      // filter to make a new list that only contains the items that does not have the same id as the removed item
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      // loop through the cartItems to get the amount and the price to add up the total
      state.cartItems.forEach((item) => {
        state.amount += item.amount;
        state.total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increment, decrement, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
