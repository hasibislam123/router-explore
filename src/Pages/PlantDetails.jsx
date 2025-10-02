import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch('/food.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === parseInt(id));
        setPlant(found);
      });
  }, [id]);

  if (!plant) return <p>Loading...</p>;

  return (
    <div className="card card-side object-cover  shadow-sm p-30 bg-[#fff0f3] ">
  <figure>
    <img
      className='h-100 w-150  rounded-l-3xl border-y-4 border-l-4'
      src={plant.image}
      alt="Movie" />
  </figure>
  <div className="card-body border-y-4 border-r-4 rounded-r-3xl bg-[#e3f2fd]">
    <h2 className="card-title font-bold text-6xl">{plant.name}</h2>
    <h2 className="card-title font-normal text-3xl mt-2"> {plant.price}$</h2>
    <p className='text-wrap text-3xl mt-2'>Ml: {plant.size_ml}</p>
    <p className='text-wrap mt-0'>{plant.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-neutral btn-outline">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default PlantDetails;
