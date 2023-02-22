import React from "react";
import { motion } from "framer-motion";
import carousel1 from "../../images/carouselImages/Carousel1.jpg";
// Import Swiper styles
import "swiper/css";

const Home = () => {
  return (
    <div className="bg-white w-full h-screen">
      <div className="w-full  py-5 flex items-center justify-center bg-gray-400">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          src={carousel1}
          alt=""
          className=""
        />
      </div>
      <div className="py-4 m-10 font-semibold text-xl italic text-[#3282B8]">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Innovative Medical & Hospital Equipment Suppliers: OASYS Healthcare is
          a leading provider of innovative audio, video and mechanical solutions
          for the medical industry.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
