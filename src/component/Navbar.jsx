import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <div className="flex flex-row shadow-sm px-[8%] py-3 justify-between items-center">
      <div className="flex flex-row space-x-4 items-center">
        <div className="h-6 w-6 rounded-full bg-primary"></div>
        <h1>Harsh Pawar</h1>
      </div>
      <div
        className={`md:static md:min-h-fit mx-auto absolute  bg-white   left-0 w-full md:w-auto min-h-[30vh] ${
          open ? "top-[9%]" : "top-[-100%]"
        } flex items-center px-[9%]`}
      >
        <ul className="flex md:flex-row flex-col md:items-center gap-8">
          <li>
            <a href="/" onClick={() => setopen(false)}>
              <p className="text-sm  font-semibold ">Home</p>
            </a>
          </li>
          <li>
            <a href="/#project" onClick={() => setopen(false)}>
              <p className="text-sm  font-semibold text-gray-500 ">
                Projects Us
              </p>
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => setopen(false)}>
              <p className="text-sm  font-semibold text-gray-500 ">
                Contact Us
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <a
          className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-1.5  text-sm rounded-full hover:scale-110"
          href="tel:+91 8517014691"
        >
          Hire Me
        </a>
        <div
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setopen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
