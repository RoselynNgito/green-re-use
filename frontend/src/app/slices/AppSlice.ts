import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

interface InitialStateProptype {
  products: ProductType[];
  cart: ProductType[];
  cartIds: string[];
}

const initialState: InitialStateProptype = {
  products: [],
  cart: [],
  cartIds: [],
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProductsReducer: (state, action) => {
      state.products = action.payload;
    },

    // Add product to cart
    addProductToCart: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        cartIds: [...state.cartIds, action.payload._id],
      };
    },

    // Remove product from cart
    removeProductFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (product) => product._id !== action.payload
      );
      const newCartIds = state.cartIds.filter((id) => id !== action.payload);
      return {
        ...state,
        cart: newCart,
        cartIds: newCartIds,
      };
    },

    // Update product quantity
    updateProductQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const updatedCart = state.cart.map((product) =>
        product._id === productId ? { ...product, quantity } : product
      );
      return {
        ...state,
        cart: updatedCart,
      };
    },
  },
});

export const {
  setProductsReducer,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
} = AppSlice.actions;

export default AppSlice.reducer;
