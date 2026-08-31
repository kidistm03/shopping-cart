import { useState } from "react";
import useCart from "../../hooks/useCart";

import "../../styles/CheckoutForm.css";

function CheckoutForm({ total }) {
  const { dispatch } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim()
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (formData.phone.length < 9) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    dispatch({
      type: "CLEAR_CART"
    });

    setSuccess(true);

    setMessage(
      `Payment successful! Your order total was $${total.toFixed(2)}.`
    );
  }

  if (success) {
    return (
      <div className="checkout-form">
        <h3>Order Successful 🎉</h3>

        <p className="checkout-message">
          {message}
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h3>Checkout</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
        />

        <button type="submit">
          Pay ${total.toFixed(2)}
        </button>
      </form>

      {message && (
        <p className="checkout-message">
          {message}
        </p>
      )}
    </div>
  );
}

export default CheckoutForm;