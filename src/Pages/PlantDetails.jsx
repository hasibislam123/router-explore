import {  useLocation } from "react-router";
import ThimeToggle from "../Component/ThimeToggle";
import { useContext } from "react";
import { CartContext } from "../../Peoviders/CartContext";


const PlantDetails = () => {
  const {cart, setCart} = useContext(CartContext)
 
  const location = useLocation() 
  console.log(location)
  // const plant = useLoaderData(); // সরাসরি plant object

  const { name, image, price, size_ml, description } = location.state;

  return (
    <div className="bg-[#adb5bd] p-4 md:p-8 rounded-3xl shadow-sm">
  <div className="flex flex-col md:flex-row items-center md:items-start ">
    {/* Image */}
    <figure className="w-full md:w-1/2">
      <img
        className="w-full h-150 object-cover rounded-3xl md:rounded-l-3xl md:rounded-r-none border-4"
        src={image}
        alt={name}
      />
    </figure>

    {/* Content */}
    <div className="w-full h-150 md:w-1/2 p-4 md:p-8 bg-[#e3f2fd] rounded-3xl md:rounded-r-3xl md:rounded-l-none border-4 flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-3xl md:text-5xl">{name}</h2>
        <h3 className="font-normal text-2xl md:text-3xl mt-2">{price}$</h3>
        <p className="text-lg md:text-xl mt-2">Ml: {size_ml}</p>
        <p className="text-base md:text-lg mt-2">{description}</p>
      </div>

      <div className="card-actions justify-end mt-4">
        <button onClick={()=> setCart (prv => [...prv, location?.state])} className="btn btn-neutral btn-outline ">Add to Cart</button>
      </div>
    </div>

  </div>
</div>

  );
};

export default PlantDetails;
