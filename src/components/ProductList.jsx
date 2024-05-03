import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';


export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onRemove={handleRemoveProduct} />
      ))}
    </div>
  );
}
