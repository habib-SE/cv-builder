import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-200 text-black py-6 mt-44">
      <div className="container mx-auto text-center px-4">
        {/* Copyright text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CV Builder. All Rights Reserved.
        </p>

        {/* Links section */}
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
          <a href="/about" className="hover:text-gray-500 transition-colors duration-300">About</a>
          <a href="/contact" className="hover:text-gray-500 transition-colors duration-300">Contact</a>
          <a href="/privacy" className="hover:text-gray-500 transition-colors duration-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-500 transition-colors duration-300">Terms of Service</a>
        </div>

        {/* Social media section */}
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors duration-300">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors duration-300">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors duration-300">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
