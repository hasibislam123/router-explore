import React, { useContext } from 'react';
import { CartContext } from '../../Peoviders/CartContext';


const Cart = () => {
    const {cart, setCart} = useContext(CartContext)
    return (
        <div>
            
            {
            cart.map(plant =>
                 <p  key={plant.id}>{plant.name}</p>  // ami akta box akare korbo

                )
            }
        </div>
    );
};

export default Cart;