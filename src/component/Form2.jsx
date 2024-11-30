import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const Form2 = () => {
  const location = useLocation();
  const { title, price } = location.state || {};

  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    device: "",
    application: "",
    deviceKey: "",
    deviceId: "",
    package: "",
    phone:""
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [packages,setPackages]=useState(title)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send email function using Email.js
  const sendEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      to_name: "IPTV",
      from_name: formData.username,
      email: formData.email,
      message: `
      Customer Name : ${formData.username}
      Phone: ${formData.phone || "123"}
        Device: ${formData.device}
        Application: ${formData.application}
        Device Key: ${formData.deviceKey}
        Device ID: ${formData.deviceId}
        Package: ${packages || "Free Trial - 12 Hours"}
        Price: £${price || "0.00"}
      `,
    };

    emailjs
      .send(
        "service_iw8iynq",
        "template_s7qcnd8",
        emailParams,
        "GbvSti0-0mRIVkPX1"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatusMessage("Your subscription details has been sent!");
        setFormData({
          username: "",
          email: "",
          device: "",
          application: "",
          deviceKey: "",
          deviceId: "",
          title: "",
          price: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatusMessage("Failed to send your message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Configure</h2>
            <p className="text-gray-600 mb-6">
              Configure your desired options and continue to checkout.
            </p>
            {/* Features Section */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {title || "Free Trial - 12 Hours"}
              </h3>
              <p className="text-gray-600 mb-4">Price: £{price || "0.00"}</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 16000 Channels</li>
                <li>• 66000+ MOVIES VOD</li>
                <li>• 4K / FHD / HD</li>
                <li>• US / UK / EU / ASIAN</li>
                <li>• PLUS Extra Countries (Worldwide)</li>
                <li>• EPG: Full EPG & M3U</li>
                <li>• ALL APPS (or M3U)</li>
                <li>• NO VPN Required for Most</li>
                <li>• Movies On Demand</li>
                <li>• TV Shows On Demand</li>
                <li>• 24/7 Live Chat Support</li>
              </ul>
            </div>
            {/* Form Section */}
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium"
                >
                  Customer Name *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium"
                >
                  Phone *
                </label>
                <input
                  type="number"
                  id="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="device"
                  className="block text-gray-700 font-medium"
                >
                  Device
                </label>
                <input
                  type="text"
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="application"
                  className="block text-gray-700 font-medium"
                >
                  Application
                </label>
                <input
                  type="text"
                  id="application"
                  name="application"
                  value={formData.application}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="deviceKey"
                  className="block text-gray-700 font-medium"
                >
                  Device Key
                </label>
                <input
                  type="text"
                  id="deviceKey"
                  name="deviceKey"
                  value={formData.deviceKey}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="deviceId"
                  className="block text-gray-700 font-medium"
                >
                  Device ID
                </label>
                <input
                  type="text"
                  id="deviceId"
                  name="deviceId"
                  value={formData.deviceId}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div class="p-4 bg-white rounded-lg ">
                <label
                  for="duration"
                  class="block text-gray-700 font-medium mb-2"
                >
                  Select Duration
                </label>
                <div class="p-4 bg-white rounded-lg shadow-md max-w-sm">
                  <label
                    for="duration"
                    class="block text-gray-700 font-medium mb-2"
                  >
                    Select Duration
                  </label>
                  <select
                    id="duration"
                    class="w-full px-4 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={packages}
                    onChange={(e)=>setPackages(e.target.value)}
                  >
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year">1 Year</option>
                    <option value="Lifetime">Lifetime</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
              >
                Confirm Subscription
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-gray-700">
                {statusMessage}
              </p>
            )}
          </div>
          {/* Right Section */}
          <div>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Order Summary
              </h3>
              <div className="text-gray-600 text-sm mb-2">
                <p>{title || "Free Trial - 12 Hours"}</p>
                <p>Price: £{price || "0.00"}</p>
              </div>
              <div className="text-blue-600 text-2xl font-bold mb-4">
                £{price || "0.00"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
