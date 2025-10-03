import React from 'react';
import { Link } from 'react-router';

const PlantCart = ({ Plant }) => {
  if (!Plant) return null;

  return (
    <div className="card bg-[#ffe5ec] w-96 shadow-lg border-2">
      <div className="card-body">
        <h2 className="card-title">{Plant.name}</h2>
        <p>{Plant.brand}</p>
        <div className="flex justify-between">
          <h1>{Plant.price}$</h1>
          <Link state={Plant} to={`/Plant-Details/${Plant.id}`} className="btn btn-neutral btn-outline">
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
