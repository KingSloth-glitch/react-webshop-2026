import { useState } from 'react';
import { useCart } from './context/CartContext';

const SelfCheckout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    adress: '',
    city: '',
    zip: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.adress ||
      !formData.city ||
      !formData.zip
    ) {
      alert('vänligen fyll i alla fält');
      return;
    }

    alert(
      `Tack för ditt köp, ${formData.name}! Din beställning på ${totalPrice}:-kr har mottagits.`
    );
    clearCart();
    setFormData({
      name: '',
      email: '',
      adress: '',
      city: '',
      zip: '',
    });
  };

  return (
    <div className="checkout">
      <h1>Kassa</h1>

      <div className="order-summary">
        <h2>Orderöversikt</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>{item.title}</p>
            <p>
              {item.quantity} * {item.price}:-kr
            </p>
          </div>
        ))}

        <h3>Totalt: {totalPrice}:-kr</h3>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Namn"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="adress"
          placeholder="Adress"
          value={formData.adress}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="Postnummer"
          value={formData.zip}
          onChange={handleChange}
        />

        <button type="submit">Slutför Köp</button>
      </form>
    </div>
  );
};

export default SelfCheckout;
