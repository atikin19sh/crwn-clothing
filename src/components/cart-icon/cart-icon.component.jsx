import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleisCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleisCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
