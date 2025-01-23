// src/components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number

  // Inline styles
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const iconStyle = {
    width: '60px',
    height: '60px',
  };

  return (
    <a
      href={`https://wa.me/${3239308138}`}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={iconStyle}
      />
    </a>
  );
};

export default WhatsAppButton;
