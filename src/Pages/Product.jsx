import React, { useEffect, useState } from 'react';
import PlantCart from '../Component/PlantCart';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/food.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {products.map(product => (
        <PlantCart key={product.id} Plant={product} />
      ))}
    </div>
  );
};

export default Product;
