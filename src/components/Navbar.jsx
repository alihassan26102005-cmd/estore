import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Nex<span>Store.</span>
      </Link>

      <div className="nav-links">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/#about">About</Link>
      </div>

      <Link to="/cart" className="cart-link">
        <span>Cart</span>
        <span className="cart-count">{cartCount}</span>
      </Link>

    </nav>
  );
}

export default Navbar;