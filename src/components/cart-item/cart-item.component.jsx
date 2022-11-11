import { CartItemContainer, Name, Price, ItemDetails } from "./cart-item.styles";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
