import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { 
  CheckoutItemContainer, 
  RemoveButton, 
  ImageContainer,
  Quantity,
  BaseSpan,
  Arrow,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const deleteItemHandler = () => deleteItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={deleteItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
