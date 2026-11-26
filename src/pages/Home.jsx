
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

function Home() {
  const [featuredProduct, setFeaturedProduct] = useState(null);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setFeaturedProduct(products[0] || null);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO NEXSTORE</p>

          <h1>
            Discover Your
            <br />
            <span>Next Favorite</span>
            <br />
            Thing.
          </h1>

          <p className="hero-description">
            Discover premium products, amazing deals and
            everything you need in one place.
          </p>

          <Link to="/products" className="hero-btn">
            Explore Now →
          </Link>
        </div>

        {featuredProduct && (
          <Link
            to={`/product/${featuredProduct.id}`}
            className="hero-image"
          >
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
            />
          </Link>
        )}
      </section>

      <section className="features">
        <div>
          <h3>Free Shipping</h3>
          <p>On selected orders</p>
        </div>

        <div>
          <h3>Premium Quality</h3>
          <p>Quality you can trust</p>
        </div>

        <div>
          <h3>Easy Shopping</h3>
          <p>Simple and secure checkout</p>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="hero-tag">WHY NEXSTORE</p>
        <h2>Shopping Made Better.</h2>

        <p>
          NexStore brings quality, style and convenience
          together to make your shopping experience better.
        </p>

        <Link to="/products" className="hero-btn about-btn">
          Browse Collection →
        </Link>
      </section>

      <footer>
        <h2>NexStore.</h2>
        <p>© 2026 NexStore. All rights reserved.</p>
        <p className="site-credit">
          Special thanks to Sir Zeeshan Ali for his guidance and support.
        </p>
      </footer>
    </>
  );
}

export default Home;
