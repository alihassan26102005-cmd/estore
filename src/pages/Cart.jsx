import { Link } from "react-router-dom";

function Cart({ cart, updateQuantity, removeItem }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-page">
        <h1>Your Cart is Empty!</h1>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="hero-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="cart-page">

      <h1>Shopping Cart</h1>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>

                <p>Rs. {item.price.toLocaleString()}</p>

                <div className="quantity">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <p>
            Subtotal:
            <strong> Rs. {total.toLocaleString()}</strong>
          </p>

          <p>Shipping: <strong>Free</strong></p>

          <hr />

          <h3>
            Total: Rs. {total.toLocaleString()}
          </h3>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Cart;