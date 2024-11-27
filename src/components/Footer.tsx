import React from "react";

const Footer = () => {
  return (
    <footer className="pt-10">
      {/* Newsletter Section */}
     
        <div className="max-w-7xl mx-auto px-6 bg-[#2b0000] py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Newsletter Info */}
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold text-white">Newsletter</h3>
              <p className="text-sm text-gray-300">
                Be the first one to know about insights, technologies, and innovations.
              </p>
            </div>
            {/* Subscribe Button */}
            <button className="bg-[#ff0000] text-[#ffffff] py-2 px-6 rounded-[4px] font-semibold hover:bg-[#cc0000] transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
    

      {/* Footer Links Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-sm text-white">
            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Works</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Career</a>
                </li>
              </ul>
            </div>
            {/* Help Links */}
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">Customer support</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
              </ul>
            </div>
            {/* Resources Links */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">Free eBooks</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Development Tutorial</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">How to - Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Career</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="flex justify-between items-center mt-8 pt-6">
            {/* Copyright */}
            <p className="text-sm text-[#ffffff]">
              &copy; Copyright 2024, All Rights Reserved By Redtilt
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#ff0000]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-[#ff0000]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-[#ff0000]">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
