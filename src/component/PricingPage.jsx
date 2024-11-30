import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleOrderClick = (plan) => {
    const formattedPrice = plan.price ? plan.price.replace("£", "").trim() : "0.00";
    navigate('/shopping', { state: { title: plan.title, price: formattedPrice } });
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.3;
      const element = document.getElementById('pricing-cards');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate=()=>{
    setIsMonthly(3);
    navigate("/pricing")
    window.scrollTo(0, 0);
  }

  const plans = isMonthly==1
    ? [
        {
          title: "1 Month",
          price: "£13.00",
          duration: "/ Month",
          description: "Unlimited Entertainment: 30 Days of Nonstop IPTV Bliss!",
          url: "https://primehdstream.com/index.php?rp=/store/subscription/1-month-subscription-one-connection",
          details: [
            "+16000 Live Channels",
            "+60000 Movies & VOD",
            "SD / HD / FHD*",
            "UK / USA / IE / ASIAN",
            "Plus More Countries",
            "EPL / EFL / UFC / 3pm KOs",
            "ALL PPV & More",
            "All Devices are supported",
            "Anti Freeze System",
            "24/7 Live Chat Support",
          ],
        },
        {
          title: "3 Months",
          price: "£25.00",
          duration: "/ 3 Months",
          description: "Stream Smarter: 90 Days of Premium IPTV Entertainment",
          url: "https://primehdstream.com/index.php?rp=/store/subscription/3-month-subscription-one-connection",
          details: [
            "+16000 Live Channels",
            "+60000 Movies & VOD",
            "SD / HD / FHD*",
            "UK / USA / IE / ASIAN",
            "Plus More Countries",
            "EPL / EFL / UFC / 3pm KOs",
            "ALL PPV & More",
            "All Devices are supported",
            "Anti Freeze System",
            "24/7 Live Chat Support",
          ],
        },
        {
          title: "6 Months",
          price: "£45.00",
          duration: "/ 6 Months",
          description: "Endless Entertainment: 6 Months of Premium IPTV",
          url: "https://primehdstream.com/index.php?rp=/store/subscription/6-month-subscription-one-connection",
          details: [
            "+16000 Live Channels",
            "+60000 Movies & VOD",
            "SD / HD / FHD*",
            "UK / USA / IE / ASIAN",
            "Plus More Countries",
            "EPL / EFL / UFC / 3pm KOs",
            "ALL PPV & More",
            "All Devices are supported",
            "Anti Freeze System",
            "24/7 Live Chat Support",
          ],
        },
      ]
    : [
        {
          title: "1 Year",
          price: "£50.00",
          duration: "/ Year",
          description: "365 Days of Uninterrupted IPTV Entertainment",
          url: "https://primehdstream.com/index.php?rp=/store/subscription/12-month-subscription-one-connection",
          details: [
            "+16000 Live Channels",
            "+60000 Movies & VOD",
            "SD / HD / FHD*",
            "UK / USA / IE / ASIAN",
            "Plus More Countries",
            "EPL / EFL / UFC / 3pm KOs",
            "ALL PPV & More",
            "All Devices are supported",
            "Anti Freeze System",
            "24/7 Live Chat Support",
          ],
        },
        {
          title: "1 Year (Two Connections)",
          price: "£70.00",
          duration: "/ 2 Years",
          description: "Experience IPTV Premium for 2 Full Years",
          url: "https://primehdstream.com/index.php?rp=/store/subscription/12-month-subscription-two-connection",
          details: [
            "+16000 Live Channels",
            "+60000 Movies & VOD",
            "SD / HD / FHD*",
            "UK / USA / IE / ASIAN",
            "Plus More Countries",
            "EPL / EFL / UFC / 3pm KOs",
            "ALL PPV & More",
            "All Devices are supported",
            "Anti Freeze System",
            "24/7 Live Chat Support",
          ],
        },
        {
          title: "Lifetime",
          price: "£350.00",
          duration: "/ Lifetime",
          description: "Lifetime IPTV Access with Unlimited Entertainment",
          url: "https://primehdstream.com/index.php?rp=/store/reseller-packages",
          details: [
            "+16000 Live Channels",
            "+60000 Movies & VOD",
            "SD / HD / FHD*",
            "UK / USA / IE / ASIAN",
            "Plus More Countries",
            "EPL / EFL / UFC / 3pm KOs",
            "ALL PPV & More",
            "All Devices are supported",
            "Anti Freeze System",
            "24/7 Live Chat Support",
          ],
        },
      ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Choose Your Plan</h2>
        <p className="text-lg text-gray-300 mt-2">Flexible and affordable pricing for everyone.</p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 font-semibold rounded-l-lg ${
            isMonthly ==1? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          } transition duration-200`}
          onClick={() => setIsMonthly(1)}
        >
          MONTHLY
        </button>
        <button
          className={`px-6 py-2 font-semibold  ${
            isMonthly ==2? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          } transition duration-200`}
          onClick={() => setIsMonthly(2)}
        >
          YEARLY
        </button>
        <button
          className={`px-6 py-2 uppercase font-semibold rounded-r-lg ${
            isMonthly==3 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          } transition duration-200`}
          onClick={() => handleNavigate()}
        >
          Multi Room
        </button>
      </div>

      {/* Pricing Cards */}
      <div id="pricing-cards" className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:scale-105 hover:shadow-xl`}
          >
            <img src={logo} alt="Logo" className="mx-auto mb-4 w-16" />
            <h3 className="text-xl font-semibold text-indigo-900">{plan.title}</h3>
            <p className="text-3xl font-bold text-red-600">
              {plan.price} <span className="text-lg font-normal text-gray-500">{plan.duration}</span>
            </p>
            <p className="text-gray-700 mt-2">{plan.description}</p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-left space-y-2 text-gray-700 font-medium">
            {plan.details.map((detail, idx) => (
                <li key={idx}>✔ {detail}</li>
              ))}
            </ul>
            <button
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-indigo-800 hover:shadow-lg transition duration-200"
              onClick={() => handleOrderClick(plan)}
            >
              ORDER NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingPage;
