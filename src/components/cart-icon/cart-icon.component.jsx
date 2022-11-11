import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpened, setIsCartOpened, cartCount } = useContext(CartContext);

  const toggleIsCartOpened = () => {
    setIsCartOpened(!isCartOpened);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpened}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
