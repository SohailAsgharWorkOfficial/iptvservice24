import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaTv, FaFilm, FaVideo } from 'react-icons/fa';
import CountUp from 'react-countup';
import img from '../assets/11.png';

function SubscriptionSection() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
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
      className="bg-gray-100 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16"
      ref={ref}
    >
      {/* Text Content */}
      <div className="max-w-lg">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="animate-spin-slow">
            <FaGlobe size={48} className="text-teal-600 mr-2" />
          </div>
          <span className="text-lg font-semibold text-gray-800 uppercase">
            Global Leader
          </span>
        </div>

        {/* Title and Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Your Trusted IPTV Subscription Service
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Experience cutting-edge entertainment with our IPTV platform. Enjoy a
          vast range of global channels, blockbuster movies, live sports, and
          exclusive shows in stunning quality. Stay ahead with the best in
          streaming technology.
        </p>

        {/* Statistics Section */}
        <div className="flex flex-wrap space-x-8 md:space-x-8">
          <div className="text-center">
            <div className="animate-bounce">
              <FaTv size={48} className="text-teal-600 mx-auto mb-2" />
            </div>
            <p className="text-lg font-bold text-gray-800">
              {startCount ? (
                <CountUp start={0} end={11000} duration={3} separator="," />
              ) : (
                0
              )}
              + Channels
            </p>
          </div>
          <div className="text-center">
            <div className="animate-bounce">
              <FaFilm size={48} className="text-teal-600 mx-auto mb-2" />
            </div>
            <p className="text-lg font-bold text-gray-800">
              {startCount ? (
                <CountUp start={0} end={15000} duration={3} separator="," />
              ) : (
                0
              )}
              + TV Shows
            </p>
          </div>
          <div className="text-center">
            <div className="animate-bounce">
              <FaVideo size={48} className="text-teal-600 mx-auto mb-2" />
            </div>
            <p className="text-lg font-bold text-gray-800">
              {startCount ? (
                <CountUp start={0} end={30000} duration={3} separator="," />
              ) : (
                0
              )}
              + Movies
            </p>
          </div>
        </div>
      </div>

      {/* TV Image Section */}
      <div className="mt-10 md:mt-0">
        <img
          src={img}
          alt="4K TV"
          className=" h-[400px] w-full object-contain animate-upDown"
        />
      </div>
    </section>
  );
}

export default SubscriptionSection;
