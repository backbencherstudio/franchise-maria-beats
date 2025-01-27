import React from "react";
import SocialMedia from "../assets/Social Media.png";
import Logo from "../assets/footer-logo.png";

export default function Footer() {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between max-w-[1300px] mx-auto px-4">
        <div className="max-w-[300px] mb-8 md:mb-0">
          <div className="bg-white inline-block rounded-md">
            <img src={Logo} alt="Logo" />
          </div>
          <h4 className="text-xl font-bold mb-4">Gulf Franchise Hub</h4>
          <p className="text-sm">
            High-quality, natural links to help you boost your rankings and
            generate more traffic to your site.
          </p>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Managed Subscription
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Guest Post Packages
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Link Audit
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Link Insertion Outreach
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Digital PR
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Franchise Your Business
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Buy A Franchise
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Articles
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Social Media</h4>
          <div className="flex space-x-4 cursor-pointer">
            <img src={SocialMedia} alt="Social Media Icons" />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center flex flex-col md:flex-row justify-between max-w-[1300px] mx-auto px-4">
        <p className="text-sm mb-4 md:mb-0">
          Terms & Conditions | Privacy Policy
        </p>
        <p className="text-sm">© Copyright 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
}
