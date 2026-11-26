
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/products";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="products-page-hero">
        <p className="hero-tag">NEXSTORE COLLECTION</p>
        <h1>Find Your Next Favorite.</h1>
        <p>
          Explore our complete collection of premium products,
          selected for you.
        </p>
      </section>

      <section
        className="products-section products-page-section"
        id="products"
      >
        <div className="section-heading">
          <div>
            <p className="hero-tag">OUR COLLECTION</p>
            <h2>All Products</h2>
          </div>

          <span>{products.length} Products</span>
        </div>

        {loading && <p>Loading products...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p>No products found in database.</p>
        )}

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
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

export default Products;
