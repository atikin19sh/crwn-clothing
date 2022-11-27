import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState } from "./cart.reducer";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.isCartOpen,
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => {
    return cartReducer.cartItems;
  },
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => (total = total + cartItem.quantity), 0),
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => (total = total + cartItem.quantity * cartItem.price),
    0,
  ),
);
