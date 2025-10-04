import React, { useContext } from 'react';
import { CartContext } from '../../Peoviders/CartContext';
import { Star } from 'lucide-react';


const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    return (
      <div className="grid  grid-cols-1 pl-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">


            {
                cart.map(plant =>

                    <div key={plant.id} className="card bg-neutral text-neutral-content rounded-4xl w-78  mt-4 ">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{plant.name}!</h2>
                            <p className='text-sm'>{plant.description}</p>
                            <div className="card-actions grid grid-cols-2 justify-between mt-3 bg-[#168aad] shadow-lg shadow-[#d9ed92]/50  text-black rounded-2xl">
                                <div>
                                    <img className='object-cover w-50 h-40 rounded-3xl p-2' src={plant.image} alt="" />
                                </div>
                                <div className='text-start gap-3 static  '>
                                    <p className='text-xl font-bold'>{plant.brand}</p>
                                    <p>price: <span className='font-bold'> {plant.price}</span> $</p>
                                    <p>gender: <span className='font-bold'>{plant.gender}</span></p>
                                    <p >rating:  <span className='font-bold'>{plant.rating}</span> </p>
                                    <p>{plant.launch_year}</p>      
                                    <button className="btn btn-primary rounded-2xl ml-13 absolute  top-[240px]   py-0">close</button>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default Cart;