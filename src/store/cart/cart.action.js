import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

export const updateCartItemsReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => (total = total + cartItem.quantity),
    0
  );
  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => (total = total + cartItem.quantity * cartItem.price),
    0
  );
  return {
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  };
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return deleteCartItem(cartItems, cartItemToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, cartItemToDelete) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItemsReducer = updateCartItemsReducer(
    addCartItem(cartItems, productToAdd)
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItemsReducer);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItemsReducer = updateCartItemsReducer(
    removeCartItem(cartItems, cartItemToRemove)
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItemsReducer);
};

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
  const newCartItemsReducer = updateCartItemsReducer(
    deleteCartItem(cartItems, cartItemToDelete)
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItemsReducer);
};
