import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex  px-[8%] rounded-lg py-5" id="footer">
      <div className="bg-gradient-to-t from-cyan-500 to-blue-500 flex-1 p-10 rounded-lg ">
        <p className="text-white lg:font-bold bg-clip-text lg:text-4xl md:text-2xl sm:text-2xl">
          Want to work together ?
        </p>

        <p className="text-white text-base font-medium my-5 lg:w-8/12">
          Feel free and just contact me through my social links or directly
          email to, im ready and maintained guy always gives first priority to
          my contacts.
        </p>

        <p className="text-white text-base font-medium my-5 w-8/12 ">
          pawarharsh119@gmail.com
        </p>

        <div className="flex flex-row  sm:mt-10  flex-wrap space-x-2 md:space-x-5 lg:space-x-5 sm:space-x-5 mb-5">
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-2.5  text-sm rounded-full hover:scale-105 mb-5 lg:mb-0 md:mb-0">
            Contact Us
          </button>
          <div className="flex flex-row space-x-4 ">
            <Link
              className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
              to="mailto:pawarharsh119@gmail.com"
              target="_blank"
            >
              <ion-icon name="logo-google"></ion-icon>
            </Link>
            <Link
              className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
              to="https://github.com/hyperdgx"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </Link>
            <Link
              className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
              to="https://www.linkedin.com/in/1harshpawar/"
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
    </div>
  );
}

export default Footer;
