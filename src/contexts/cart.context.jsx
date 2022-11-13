import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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

const deleteCartItem = (cartItems, cartItemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  deleteItemFromCart: () => null,
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_IS_CART_OPENED: "SET_IS_CART_OPENED",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_IS_CART_OPENED":
      return {
        ...state,
        isCartOpen: payload,
      };
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhadnled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => (total = total + cartItem.quantity),
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => (total = total + cartItem.quantity * cartItem.price),
      0
    );
    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
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

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
