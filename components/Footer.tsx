import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8" id='footer'>
      <div className="container mx-auto p-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-start max-w-xs">
          <h1 className="text-2xl font-bold mb-2">DocuVerify</h1>
          <p className="text-gray-400 text-sm mb-4">
            We provide innovative solutions for document management, making it easier and more secure.
          </p>
        </div>
        
        {/* Quick Links */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors mb-1">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors mb-1">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Legal</h2>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors mb-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center">
          <Link href="https://twitter.com/yourprofile">
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Twitter
            </span>
          </Link>
          <Link href="https://facebook.com/yourprofile">
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Facebook
            </span>
          </Link>
          <Link href="https://linkedin.com/in/yourprofile">
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              LinkedIn
            </span>
          </Link>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-4 mt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} DocuVerify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
