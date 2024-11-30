import React from 'react';
import { FiShield, FiHeadphones, FiTv, FiServer } from 'react-icons/fi';

function FeatureCards() {
  const features = [
    {
      icon: <FiShield size={48} className="text-blue-600" />,
      title: 'Secured',
      description: 'Our team ensures your streaming is always safe and secure.',
    },
    {
      icon: <FiHeadphones size={48} className="text-blue-600" />,
      title: 'Support',
      description: 'We are available 24/7 on Live Chat to resolve any issues.',
    },
    {
      icon: <FiTv size={48} className="text-blue-600" />,
      title: 'Channels',
      description: 'We provide Premium Channels from the UK, USA, Canada, & more.',
    },
    {
      icon: <FiServer size={48} className="text-blue-600" />,
      title: '100% Uptime',
      description: 'With over 100 stable servers, downtime is not a concern.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 mt-2">
          Discover the features that make our IPTV service stand out.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4 flex justify-center">
              <div className="transition duration-200 hover:text-white hover:bg-red-100 p-3 rounded-full">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
