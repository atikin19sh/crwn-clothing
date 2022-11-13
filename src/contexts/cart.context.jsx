import { createContext, useEffect, useReducer } from "react";

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
  isCartOpened: false,
  setIsCartOpened: () => null,
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_LIST = {
  SET_IS_CART_OPENED: "SET_IS_CART_OPENED",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_ITEMS",
}

const INITIAL_STATE = {
  isCartOpened: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case "SET_IS_CART_OPENED":
      return {
        ...state, 
        isCartOpened: !state.isCartOpened,
      };
    case "SET_CART_ITEMS":
      return {
        ...state,
        cartItems: payload,
      }
    case "SET_CART_COUNT":
      return {
        ...state,
        cartCount: payload,
      }
    case "SET_CART_TOTAL":
      return {
        ...state,
        cartTotal: payload,
      }
    default:
      throw new Error(`Unhadnled type of ${type} in cartReducer`);
  };
}

export const CartProvider = ({ children }) => {
  const [{ 
    isCartOpened, 
    cartItems, 
    cartCount, 
    cartTotal 
  }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpened = () => {
    dispatch({ type: CART_ACTION_LIST.SET_IS_CART_OPENED });
  };

  const setCartItems = (items) => {
    dispatch({ type: CART_ACTION_LIST.SET_CART_ITEMS, payload: [...items] });
  };

  const setCartCount = (count) => {
    dispatch({ type: CART_ACTION_LIST.SET_CART_COUNT, payload: count });
  };

  const setCartTotal = (total) => {
    dispatch({ type: CART_ACTION_LIST.SET_CART_TOTAL, payload: total });
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => (total = total + cartItem.quantity),
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => (total = total + cartItem.quantity * cartItem.price),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (cartItemToDelete) => {
    setCartItems(deleteCartItem(cartItems, cartItemToDelete));
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    isCartOpened,
    setIsCartOpened,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
