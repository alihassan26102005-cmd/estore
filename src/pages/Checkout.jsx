import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, clearCart }) {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [ordered, setOrdered] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    setOrdered(true);
    clearCart();
  };

  if (ordered) {
    return (
      <div className="empty-page">
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with NexStore.</p>
        <Link to="/" className="hero-btn">
          Back to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-page">
        <h2>Your cart is empty!</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <section className="checkout-page">

      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="03XXXXXXXXX"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          required
        />

        <label>Delivery Address</label>
        <textarea
          placeholder="Enter your complete address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
          required
        />

        <h3>Order Total: Rs. {total.toLocaleString()}</h3>

        <p>Payment Method: Cash on Delivery</p>

        <button type="submit" className="checkout-btn">
          Place Order
        </button>

      </form>

    </section>
  );
}

export default Checkout;