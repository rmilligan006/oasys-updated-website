import React, { useState } from "react";
import Logo from "../../images/logo1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-white flex justify-between items-center">
        <motion.img
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          src={Logo}
          alt="Oasys Healthcare Logo"
          className="w-[150px]"
        />
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-4xl px-10 font-semibold text-[#3282B8] italic"
        >
          Solutions <motion.span>Simplified</motion.span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center px-2 bg-[#3282B8] text-white py-1"
      >
        <Link to="/">
          <ul className="m-5 text-lg  hover:text-black hover:ease-in duration-300">
            Home
          </ul>
        </Link>
        <Link to="/products">
          <ul className="m-5 text-lg  hover:text-black hover:ease-in duration-300">
            Products
          </ul>
        </Link>
        <Link to="/about">
          <ul className="m-5 text-lg  hover:text-black hover:ease-in duration-300">
            About
          </ul>
        </Link>

        <Link to="/contact">
          <ul className="m-5 text-lg  hover:text-black hover:ease-in duration-300">
            Contact
          </ul>
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
