import React from 'react';

const PromoBanner = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex w-11/12 max-w-6xl overflow-hidden rounded-lg shadow-xl">
        
        {/* Left Side - Free Trial with Angled Edge */}
        <div className="relative w-1/2 p-8 text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 flex items-center justify-center transform -skew-x-6 animate-slideInLeft">
          <div className="absolute inset-0 bg-cover bg-center opacity-25 transition-opacity duration-500 ease-in-out hover:opacity-40" style={{ backgroundImage: 'url(https://your-image-url-left.com)' }}></div>
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold uppercase animate-fadeIn">Confused! Can't make a decision?</p>
            <h2 className="mt-2 text-3xl font-bold animate-fadeIn">Get Free Trial now!</h2>
            <button className="px-6 py-2 mt-4 font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
              Free Trial →
            </button>
          </div>
          {/* Left Arrow */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b from-blue-600 to-cyan-400 transform skew-y-12"></div>
        </div>

        {/* Middle Divider */}
        <div className="w-1 px-8 bg-white hidden md:block"></div>

        {/* Right Side - Our Store with Angled Edge */}
        <div className="relative w-1/2 p-8 text-white bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center transform skew-x-6 animate-slideInRight">
          <div className="absolute inset-0 bg-cover bg-center opacity-25 transition-opacity duration-500 ease-in-out hover:opacity-40" style={{ backgroundImage: 'url(https://your-image-url-right.com)' }}></div>
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold uppercase animate-fadeIn">Join Us!</p>
            <h2 className="mt-2 text-3xl font-bold animate-fadeIn">Let's find our plans Tailored for you</h2>
            <button className="px-6 py-2 mt-4 font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
              Our Store →
            </button>
          </div>
          {/* Right Arrow */}
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-b from-blue-600 to-cyan-400 transform -skew-y-12"></div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
