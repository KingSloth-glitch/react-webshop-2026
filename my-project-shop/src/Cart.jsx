import { useCart } from './context/CartContext';

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div className="trolly">
      <h1>Kundvagn</h1>

      {cart.length === 0 && <p>Din Kundvagn är tom</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>quantity: {item.quantity}</p>
          <p>pris: {item.price * item.quantity}:-kr</p>

          <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
        </div>
      ))}

      <h2>Total: {totalPrice}:-kr</h2>
    </div>
  );
};

export default Cart;
