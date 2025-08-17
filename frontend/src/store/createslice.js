import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data/data";

const initialState = {
  items: data,
  cart: [],
  totalprice: 0,
  totalquantity: 0,
  deliveryfee:200
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      
      if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it with quantity 1
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((cartItem) => cartItem.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // If quantity is 1, remove the item
        state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
      }
    },

    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
    },
    clearcart:(state,action)=>{
      state.cart = []
    }
  },
});

export const { addtocart , deleteItem , decreaseQuantity , increaseQuantity , clearcart} = cartslice.actions;
export default cartslice.reducer;
