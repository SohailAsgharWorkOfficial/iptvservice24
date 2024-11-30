import React, { useState } from 'react';
import img1 from "../assets/122.png";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Can I Use My Subscription On Multiple Devices?',
      answer: 'Yes, but simultaneous streaming is limited to one device at a time.',
    },
    {
      question: 'How Soon Can I Start Using The Service?',
      answer: 'You can start using the service immediately after activation.',
    },
    {
      question: 'What Internet Quality Is Required?',
      answer: 'We recommend a stable internet connection with at least 10 Mbps for HD streaming.',
    },
    {
      question: 'Can I Cancel My Subscription?',
      answer: 'Yes, you can cancel your subscription anytime from your account dashboard.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16">
      {/* FAQ Text Section */}
      <div className="max-w-lg w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 border rounded-md transition-all ${
                openIndex === index
                  ? 'bg-blue-100 border-blue-400 shadow-lg'
                  : 'bg-white border-gray-300'
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? 'text-blue-700' : 'text-gray-900'
                  }`}
                >
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-bold ${
                    openIndex === index ? 'text-blue-700' : 'text-gray-500'
                  }`}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Image */}
      <div className="flex justify-center items-center w-full">
        <img
          src={img1}
          alt="FAQ illustration"
          className="w-full max-w-sm animate-upDown "
        />
      </div>
    </section>
  );
}

export default FAQSection;
