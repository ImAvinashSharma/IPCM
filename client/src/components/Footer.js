import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  FAQ
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Help
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Terms
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Facebook
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Linkedin
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Official Blog
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="hover:underline text-gray-600 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
