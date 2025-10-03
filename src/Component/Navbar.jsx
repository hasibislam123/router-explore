import React, { use, useState } from "react";
import { Link } from "react-router"; // react-router-dom ব্যবহার করবে
import ThimeToggle from "./ThimeToggle";
import { BaggageClaim } from "lucide-react";
import { CartContext } from "../../Peoviders/CartContext";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart, setCart } = use(CartContext)
  return (
    <div className="navbar  shadow-sm px-4 bg-[#ffe5ec]">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold">SCENTRA</Link>
      </div>
      <div className="hidden md:block  mr-20">
        <label className="input rounded-3xl border-none ">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      {/* Desktop Menu */}
      <div className="mr-40">
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-neutral">Home</Link></li>
          <li><Link to="/product" className="hover:text-neutral">Product</Link></li>
          <li><Link to="/contact" className="hover:text-neutral">Contact</Link></li>
          <li><Link to="/about" className="hover:text-neutral">About</Link></li>
        </ul>
      </div>
      {/* Login button (Desktop only) */}
      <div className="flex justify-baseline gap-3">

        <div className=" hidden md:block">
          <button className="btn btn-neutral btn-outline ml-30 w-[94px]">Log In</button>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/Cart"
            onClick={() => setOpen(false)}>
            <div className="relative"><BaggageClaim />
              <p className="absolute top-[-10px] right-[-10px]">{cart.length}</p>
            </div>
          </Link>
          <ThimeToggle></ThimeToggle>
        </div>

      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex">

        <button onClick={() => setOpen(!open)} className="btn btn-ghost">
          {open ? "✖" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/product" onClick={() => setOpen(false)}>Product</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/Cart" onClick={() => setOpen(false)}>Cart</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <button className="btn btn-neutral btn-outline w-32" onClick={() => setOpen(false)}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

