import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  isCartOpened: false,
  setIsCartOpened: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);

  const value = { cartItems, setCartItems, isCartOpened, setIsCartOpened };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
