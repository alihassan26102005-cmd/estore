import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  return (
    <>
      <section className="products-page-hero">
        <p className="hero-tag">NEXSTORE COLLECTION</p>
        <h1>Find Your Next Favorite.</h1>
        <p>Explore our complete collection of premium products, selected for you.</p>
      </section>

      <section className="products-section products-page-section" id="products">
        <div className="section-heading">
          <div>
            <p className="hero-tag">OUR COLLECTION</p>
            <h2>All Products</h2>
          </div>
          <span>{products.length} Products</span>
        </div>

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
        <p className="site-credit">Special thanks to Sir Zeeshan Ali for his guidance and support.</p>
      </footer>
    </>
  );
}

export default Products;
