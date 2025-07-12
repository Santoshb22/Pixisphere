"use client";

import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Carousel = ({ portfolio }) => {
  const [currIdx, setCurrIdx] = useState(0); // start from first
  const totalImg = portfolio.length;

  console.log(portfolio);

  const handleNext = () => {
    setCurrIdx((prev) => (prev + 1) % totalImg);
  };

  const handlePrev = () => {
    setCurrIdx((prev) => (prev - 1 + totalImg) % totalImg);
  };

  return (
    <div className='relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-md'>
      <img
        src={portfolio[currIdx]}
        alt={`Carousel image ${currIdx + 1}`}
        className='w-full h-60 object-cover'
      />

      <button
        onClick={handlePrev}
        className='absolute top-1/2 -translate-y-1/2 left-2 bg-white text-black p-2 rounded-full shadow-md'
      >
        <FaAngleLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className='absolute top-1/2 -translate-y-1/2 right-2 bg-white text-black p-2 rounded-full shadow-md'
      >
        <FaAngleRight size={20} />
      </button>

      <div className='absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded'>
        {currIdx + 1} / {totalImg}
      </div>
    </div>
  );
};

export default Carousel;
