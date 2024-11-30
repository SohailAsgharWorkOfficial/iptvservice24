import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Shopping() {
  const location = useLocation();
  const { title, price } = location.state || {}; // Destructure the passed state

  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/subform", { state: { title: title, price: price || 0 } }); // Ensure price is at least 0
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-semibold mb-6">Get Your Trial Instant.</h1>
      <div className="w-80 bg-white rounded-lg shadow-lg">
        <div className="bg-blue-600 text-white rounded-t-lg py-4 px-6 text-center">
          <h2 className="text-lg font-semibold">{title || 'Free Trial'}</h2>
          <p className="text-sm mt-2">{"£" + (price !== undefined ? price : 0)}</p>
        </div>
        <div className="p-6 text-center">
          <button
            onClick={() => handleOrderClick()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Confirm
          </button>
          <ul className="text-sm text-gray-700 mt-5">
            <li>+16000 Channels</li>
            <li>+60000 MOVIES & VOD</li>
            <li>HD / FHD / UHD*</li>
            <li>UK / USA / IE / ASIAN</li>
            <li className="text-blue-600">Plus More Countries (WorldWide)</li>
            <li>EPL / EFL / UFC / 3pm KOs</li>
            <li className="text-green-600">ALL PPV & More</li>
            <li className="text-red-600">NO EPL/SPORTS on Trial</li>
            <li>Movies On Demand</li>
            <li>TV Shows On Demand</li>
            <li>24/7 Live Chat Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
