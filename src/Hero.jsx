import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="flex flex-1 px-[8%] py-5 lg:space-x-5 sm:space-x-5 "
      id="home"
    >
      <div className="bg-gradient-to-t from-cyan-500 to-blue-500 lg:w-2/3 sm:w-full rounded-2xl p-10 flex flex-col justify-between ">
        <p className="text-white text-[36px]  bg-clip-text  font-bold  tracking-normal lg:w-4/5  sm:my-5">
          Hey !, I’m Vishal, A Modern Web Developer With Few Years Of Experience.
        </p>
        <p className="text-white text-base   font-medium  lg:w-4/5 md:w-full sm:w-full my-5">
          Working with new skills can be a problem, but I always enjoy that
          process, and it helps me and also provides 100% satisfaction to my
          customers.
        </p>

        <div className="flex flex-row space-x-0 sm:space-x-4 flex-wrap ">
          <div>
            <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-2.5  text-sm rounded-full hover:scale-105">
              Contact Us
            </button>
          </div>

          <div className="flex flex-row space-x-2 my-5 sm:my-0  ">
            <Link
              className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
              to="mailto:5060vishalkumar@gmail.com"
              target="_blank"
            >
              <ion-icon name="logo-google"></ion-icon>
            </Link>
            <Link
              className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
              to="https://github.com/vishalkumardev"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </Link>
            <Link
              className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
              to="https://www.linkedin.com/in/vishal-kumar-132272228/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
            <Link
              className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
              to="https://www.youtube.com/@imbibe1"
              target="_blank"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-cyan-500 to-blue-500 lg:w-1/3 rounded-2xl sm:w-full md:w-full  lg:mb-0 md:mb-0 ] hidden md:block ">
        <img
          src="https://5.imimg.com/data5/WS/CM/RN/SELLER-101590291/boys-black-party-wear-blazer-500x500.jpg"
          alt=""
          className="object-cover w-full h-full rounded-2xl sm:object-top md:object-center "
        />
      </div>
    </div>
  );
}

export default Hero;
