import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Товар</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Описание</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Количество</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Цена</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Удалить</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Итого: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
