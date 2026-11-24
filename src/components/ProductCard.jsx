import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="sale-badge">SALE</span>
      </Link>

      <div className="product-info">

        <p className="category">{product.category}</p>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="price">
          <strong>Rs. {product.price.toLocaleString()}</strong>
          <del>Rs. {product.oldPrice.toLocaleString()}</del>
        </div>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart +
        </button>

      </div>
    </div>
  );
}

export default ProductCard;