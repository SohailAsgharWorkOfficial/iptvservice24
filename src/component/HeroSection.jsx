import React, { useState, useEffect } from "react";
import heroImage1 from "../assets/hero.png"; // First image
import heroImage2 from "../assets/hero2.png"; // Second image
import { Link } from "react-router-dom";

function HeroSection() {
  const [showFirstContent, setShowFirstContent] = useState(true);

  // Toggle content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstContent((prev) => !prev);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-20 flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Hero Content 1 */}
      <div
        className={`transition-opacity duration-1000 ${
          showFirstContent ? "opacity-100" : "opacity-0"
        } w-full max-w-5xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative`}
      >
        <div className="max-w-lg md:mr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 leading-tight">
            THE FUTURE OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
              ENTERTAINMENT
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 mt-4">
            YOUR GATEWAY TO UNLIMITED STREAMING
          </p>
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <Link
              to={"/shopping"}
              className="px-6 py-3 z-10 bg-cyan-500 text-black font-medium rounded-md hover:shadow-[0_0_20px_cyan] transition duration-200"
            >
              Free Trial →
            </Link>
            <Link
               to="/pricing"
              className="px-6 z-10 py-3 bg-purple-500 text-black font-medium rounded-md hover:shadow-[0_0_20px_purple] transition duration-200"
            >
              Explore Plans →
            </Link>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center max-w-xs md:max-w-sm">
          <img
            src={heroImage1}
            alt="Character watching TV"
            className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
          />
        </div>
      </div>

      {/* Hero Content 2 */}
      <div
        className={`transition-opacity duration-1000 ${
          showFirstContent ? "opacity-0" : "opacity-100"
        } w-full max-w-5xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 absolute`}
      >
        <div className="max-w-lg md:mr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 leading-tight">
            DISCOVER OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              PREMIUM CHANNELS
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 mt-4">
            EXCLUSIVE ACCESS TO UNLIMITED CONTENT
          </p>
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <a
              href="#"
              className="px-6 py-3 bg-pink-500 text-black font-medium rounded-md hover:shadow-[0_0_20px_pink] transition duration-200"
            >
              Get Started →
            </a>
           <Link
               to="/pricing"
              className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-md hover:shadow-[0_0_20px_yellow] transition duration-200"
            >
              Explore Plans →
            </Link>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center max-w-xs md:max-w-sm">
          <img
            src={heroImage2}
            alt="Another character watching TV"
            className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
