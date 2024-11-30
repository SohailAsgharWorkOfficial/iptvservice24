import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-900 py-10 w-[100%] animate-fadeIn">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-start animate-slideInUp">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
            <span className="text-4xl">IPTV</span>
            <span className="text-gray-700 text-sm ml-1">Stream</span>
          </div>
          <p className="text-sm leading-relaxed mt-4 animate-fadeIn">
            Our 4K Live IPTV service promises a fresh, immersive experience, delivering a seamless blend of quality, variety, and innovation.
          </p>
        </div>
        
        {/* Useful Links */}
        <div className="animate-slideInUp">
          <h3 className="text-lg font-semibold mb-4 animate-fadeIn">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/reseller" className="hover:text-blue-500">Become A Reseller</a></li>
            <li><a href="/installation" className="hover:text-blue-500">Installation Guide</a></li>
            <li><a href="/support" className="hover:text-blue-500">Customer Support</a></li>
            <li><a href="/affiliate" className="hover:text-blue-500">Affiliate Program</a></li>
            <li><a href="/pricing" className="hover:text-blue-500">Plans & Pricing</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="animate-slideInUp">
          <h3 className="text-lg font-semibold mb-4 animate-fadeIn">Get In Touch</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>Info@iptvservice24.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-phone-alt"></i>
              <span>+447365849876</span>
            </li>
          </ul>
        </div>
        
        {/* Goals */}
        <div className="animate-slideInUp">
          <h3 className="text-lg font-semibold mb-4 animate-fadeIn">Our Goals</h3>
          <p className="text-sm leading-relaxed animate-fadeIn">
            Our Goal Providing You with the Best Service, Ensuring an Unmatched Viewing Experience.
          </p>
        </div>
        
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-300 pt-4 animate-fadeIn">
        &copy; 2024 4KLive IPTV. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
