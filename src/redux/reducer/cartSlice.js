import { createSlice } from "@reduxjs/toolkit";

function loadCart() {
  let cart = {};
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  return cart;
}

function loadTotal() {
  let cart = loadCart();
  let total = 0;
  for (let item in cart) {
    total += cart[item].quantity * cart[item].price;
  }
  return total;
}

const initialState = {
  cart: loadCart(),
  total: loadTotal(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, name, img, price } = action.payload;

      const cartState = { ...state.cart };

      if (_id in cartState) {
        cartState[_id].quantity += 1;
      } else {
        cartState[_id] = { quantity: 1, _id, name, img, price };
      }

      let total = 0;
      for (let item in cartState) {
        total += cartState[item].quantity * cartState[item].price;
      }

      state.cart = cartState;
      state.total = total;
      localStorage.setItem("cart", JSON.stringify(cartState));
    },
    removeFromCart: (state, action) => {
      const { _id } = action.payload;
      const cartState = { ...state.cart };

      if (_id in cartState) {
        cartState[_id].quantity -= 1;
      }

      if (cartState[_id].quantity < 1) {
        delete cartState[_id];
      }

      let total = 0;
      for (let item in cartState) {
        total += cartState[item].quantity * cartState[item].price;
      }

      state.cart = cartState;
      state.total = total;
      localStorage.setItem("cart", JSON.stringify(cartState));
    },
    clearCart: (state) => {
      state.cart = {};
      state.total = 0;

      localStorage.clear("cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
