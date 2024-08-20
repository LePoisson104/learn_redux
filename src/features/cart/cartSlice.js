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
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
