// import React from 'react'

import {
  FaHome,
  FaAppleAlt,
  FaHeadphonesAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { MdToys } from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";
import { TbMilkshake } from "react-icons/tb";

import { MdLocalMall } from "react-icons/md";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="w-full px-4 py-4 flex items-center justify-center gap-4 overflow-x-auto whitespace-nowrap scroll-smooth overflow-scroll scrollbar-hide">
      <div className="flex items-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap scroll-smooth">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <MdLocalMall />
          <span>All</span>
        </Link>

        <Link
          to="/cafe"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <TbMilkshake />
          <span>Cafe</span>
        </Link>

        <Link
          to="/home-item"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <FaHome />
          <span>Home</span>
        </Link>

        <Link
          to="/toys"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <MdToys />
          <span>Toys</span>
        </Link>

        <Link
          to="/fresh"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <FaAppleAlt />
          <span>Fresh</span>
        </Link>

        <Link
          to="/electronics"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <FaHeadphonesAlt />
          <span>Electronics</span>
        </Link>

        <Link
          to="/mobile"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <FaMobileAlt />
          <span>Mobile</span>
        </Link>

        <Link
          to="/beauty"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <GiLipstick />
          <span>Beauty</span>
        </Link>

        <Link
          to="/fashion"
          className="flex items-center gap-2 font-semibold text-sm md:text-base hover:text-pink-600 transition shrink-0"
        >
          <IoShirt />
          <span>Fashion</span>
        </Link>
      </div>
    </div>
  );
};

export default Category;
