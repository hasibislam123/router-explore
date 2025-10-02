import React from 'react';
import { Link } from 'react-router';

const PlantCart = ({ Plant }) => {
  if (!Plant) return null;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{Plant.name}</h2>
    <p>{Plant.brand}</p>
    <div className="flex justify-between">
      <h1>{Plant.price}$</h1>
      <Link to={`/Plant-Details/${Plant.id}`} className="btn btn-neutral btn-outline">
            View Details
          </Link>
    </div>
    
  </div>
  <figure>
    <img
    className="w-full h-80 object-cover"
      src={Plant.image}
      alt="Shoes" />
  </figure>
</div>
  );
};

export default PlantCart;
