import React, { useState, useEffect, useRef } from 'react';
import { FaCrown, FaUsers, FaServer } from 'react-icons/fa';
import CountUp from 'react-countup';
import img1 from "../assets/22.png";
import img2 from "../assets/33.png";
import img4 from "../assets/44.png";
import img5 from "../assets/55.png";
import img6 from "../assets/66.png";

function PremiumFeaturesSection() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      className="bg-gray-100 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-[20%]"
      ref={ref}
    >
      {/* Image Collage */}
      <div className="flex flex-wrap items-center justify-center md:justify-start mb-10 md:mb-0 relative">
        <div className="relative flex flex-col items-center space-y-10 space-x-10 animate-upDown">
          <img
            src={img1}
            alt="Android"
            className="rounded-full shadow-lg border-2 border-teal-500 w-28 h-28 bg-gray-200"
          />
          <img
            src={img2}
            alt="iOS"
            className="rounded-full shadow-lg border-2 border-teal-500 w-24 h-24 bg-cyan-400 absolute top-0 left-8"
          />
          <img
            src={img4}
            alt="PC & Laptop"
            className="rounded-full shadow-lg border-2 border-teal-500 w-20 h-20 bg-blue-500 absolute -top-8 right-10"
          />
          <img
            src={img5}
            alt="Apple TV"
            className="rounded-full shadow-lg border-2 border-teal-500 w-16 h-16 bg-purple-500 absolute -bottom-4 left-6"
          />
          <img
            src={img6}
            alt="Firestick"
            className="rounded-full shadow-lg border-2 border-teal-500 w-20 h-20 bg-pink-500 absolute -bottom-10 right-8"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <FaCrown size={48} className="text-cyan-600 animate-spin-slow mr-3" />
          <span className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            Premium Features of 4KLive IPTV
          </span>
        </div>

        {/* Title and Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Experience IPTV Like Never Before
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Transform your entertainment journey with our advanced IPTV service, offering unmatched streaming quality, robust infrastructure, and an unparalleled channel lineup.
        </p>

        {/* Statistics Section */}
        <div className="flex space-x-8 justify-center md:justify-start">
          <div className="text-center">
            <FaUsers
              size={48}
              className="mx-auto mb-2 text-cyan-600 animate-bounce"
            />
            <p className="text-lg font-bold text-gray-800">
              {startCount ? (
                <CountUp start={0} end={71000} duration={3} separator="," />
              ) : (
                0
              )}
              + Clients
            </p>
          </div>
          <div className="text-center">
            <FaServer
              size={48}
              className="mx-auto mb-2 text-cyan-600 animate-bounce"
            />
            <p className="text-lg font-bold text-gray-800">
              {startCount ? (
                <CountUp start={0} end={500} duration={3} separator="," />
              ) : (
                0
              )}
              + Servers
            </p>
          </div>
          <div className="text-center">
            <FaUsers
              size={48}
              className="mx-auto mb-2 text-cyan-600 animate-bounce"
            />
            <p className="text-lg font-bold text-gray-800">
              {startCount ? (
                <CountUp start={0} end={27} duration={3} separator="," />
              ) : (
                0
              )}
              + Team Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumFeaturesSection;
