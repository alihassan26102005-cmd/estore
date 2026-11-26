
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

function ProductDetail({ addToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProducts()
      .then((products) => {
        const selected = products.find(
          (item) => String(item.id) === String(id)
        );

        setProduct(selected || null);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="empty-page">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="empty-page">
        <h2>Product Not Found!</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="detail-container">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-info">
        <p className="hero-tag">{product.category}</p>

        <h1>{product.name}</h1>

        <div className="detail-price">
          Rs. {product.price.toLocaleString()}
        </div>

        <del>
          Rs. {product.oldPrice.toLocaleString()}
        </del>

        <p className="detail-description">
          {product.description}
        </p>

        <p className="stock">● In Stock</p>

        <div className="quantity">
          <button
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>

        <button
          className="add-btn detail-btn"
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </button>

        <Link to="/cart" className="back-link">
          Go to Shopping Cart →
        </Link>
      </div>
    </section>
  );
}

export default ProductDetail;
