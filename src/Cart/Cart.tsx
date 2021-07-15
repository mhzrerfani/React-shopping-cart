import { Wrapper } from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your Shopping List</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <div id="total">
        <h4>
          Total: $
          {cartItems
            .reduce((ack, item) => ack + item.price * item.amount, 0)
            .toFixed(2)}
        </h4>
      </div>
    </Wrapper>
  );
};

export default Cart;
