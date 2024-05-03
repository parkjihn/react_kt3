import Stars from "./Stars";

export default function ProductItem({ product, onRemove }) {
    return (
      <div className="product-card" onDoubleClick={() => onRemove(product.id)}>
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Stars rating={product.rating} />
      </div>
    );
  }
  