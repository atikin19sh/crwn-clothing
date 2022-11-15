import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

const updateCartItemsReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => (total = total + cartItem.quantity),
    0
  );
  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => (total = total + cartItem.quantity * cartItem.price),
    0
  );
  dispatch(
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    })
  );
};

const setIsCartOpen = (bool) => {
  dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPENED, bool));
};

const addItemToCart = (productToAdd) => {
  updateCartItemsReducer(addCartItem(cartItems, productToAdd));
};

const removeItemFromCart = (cartItemToRemove) => {
  updateCartItemsReducer(removeCartItem(cartItems, cartItemToRemove));
};

const deleteItemFromCart = (cartItemToDelete) => {
  updateCartItemsReducer(deleteCartItem(cartItems, cartItemToDelete));
};
