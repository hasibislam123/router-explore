import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm">
      <a className=" text-xl">SCENTRA</a>
      <ul className='flex gap-6 justify-center'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <button className="btn btn-neutral btn-outline">Log In</button>
    </div>
  );
};

export default Navbar;
