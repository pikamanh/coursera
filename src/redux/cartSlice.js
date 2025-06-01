// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // { id, name, price, qty, image }
  },
  reducers: {
    addToCart: (state, action) => {
      const exist = state.items.find(item => item.id === action.payload.id);
      if (!exist) state.items.push({ ...action.payload, qty: 1 });
    },
    incrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  }
});

export const { addToCart, incrementQty, decrementQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
