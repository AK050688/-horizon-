import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import "../Css/Footer.css";
import horizonlogo from "../assets/slider/horizonlogo.webp";

const Footer = () => {
  return (
    <footer className="footer py-6 bg-[#815e07]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-14">
        {/* School Logo */}
        <div className="logo mb-4 md:mb-0">
          <img src={horizonlogo} alt="School Logo" />
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap">
          {/* Quick Links */}
          <div className="quick-links mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-4 text-[#F2F2F2]">Quick Links</h2>
            <ul>
              <li className="border-b border-gray-500 flex items-center gap-2 py-2 md:w-56  w-full">
                <FaRegArrowAltCircleRight className="text-gray-300" />
                <Link
                  to="/career"
                  className="text-[#F2F2F2] hover:text-gray-400"
                >
                  Career
                </Link>
              </li>
              <li className="border-b border-gray-500 flex items-center gap-2 py-2 md:w-56 w-full">
                <FaRegArrowAltCircleRight className="text-gray-300" />
                <Link
                  to="/about/our-school"
                  className="text-[#F2F2F2] hover:text-gray-400"
                >
                  Our School
                </Link>
              </li>
              <li className="border-b border-gray-500 flex items-center gap-2 py-2 md:w-56 w-full ">
                <FaRegArrowAltCircleRight className="text-gray-300" />
                <Link
                  to="/admission/form"
                  className="text-[#F2F2F2] hover:text-gray-400"
                >
                  Admission Form
                </Link>
              </li>
              <li className="border-b border-gray-500 flex items-center gap-2 py-2 md:w-56 w-full ">
                <FaRegArrowAltCircleRight className="text-gray-300" />
                <Link
                  to="/calendar"
                  className="text-[#F2F2F2] hover:text-gray-400"
                >
                  Calendar
                </Link>
              </li>
              <li className="border-b border-gray-500 flex items-center gap-2 py-2 md:w-56 w-full">
                <FaRegArrowAltCircleRight className="text-gray-300" />
                <Link
                  to="/campus/facilities"
                  className="text-[#F2F2F2] hover:text-gray-400"
                >
                  Facilities
                </Link>
              </li>
              <li className="border-b border-gray-500 flex items-center gap-2 py-2 md:w-56 w-full">
                <FaRegArrowAltCircleRight className="text-gray-300" />
                <Link
                  to="/about/in-news"
                  className="text-[#F2F2F2] hover:text-gray-400"
                >
                  In News
                </Link>
              </li>
              <li className="border-b border-gray-500 flex items-center gap-2 py-2 md:w-56 w-full">
                <FaRegArrowAltCircleRight className="text-gray-300" />
                <Link
                  to="/campus/gallery"
                  className="text-[#F2F2F2] hover:text-gray-400"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map Location */}
          <div className="map-container mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-4 text-[#F2F2F2]">Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.695192337328!2d76.59836831526604!3d8.867565293922562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b09fcab1f8f6f49%3A0xa0737d5f93cdcb84!2sDelhi%20Public%20School%2C%20Meeyannoor!5e0!3m2!1sen!2sin!4v1697476490123!5m2!1sen!2sin"
              width="300"
              height="300"
              className="rounded-md"
              allowFullScreen=""
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>

          {/* Contact Us */}
          <div className="contact-info text-center md:text-left mt-4 2xl:mt-0">
            <h2 className="text-lg font-bold mb-4 text-[#F2F2F2]">Contact Us</h2>
            <p className="text-[#F2F2F2]">
              <strong>New Horizon Public School</strong> <br />
              Pathargama, Godda, Jharkhand – 814154
            </p>
            <p className="text-[#F2F2F2] mt-4">
              <strong>Mobile: </strong>(+91) 9876543210
            </p>
            <p className="text-[#F2F2F2]">
              <strong>Landline:</strong> 06434 123456
            </p>
            <p className="text-[#F2F2F2] mt-4">
              <strong>Email: </strong>
              <a
                href="mailto:info@newhorizon.com"
                className="text-[#F2F2F2] hover:text-gray-400"
              >
                info@newhorizon.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-6 border-gray-600" />
      <div className="text-center mt-4">
        <p className="text-gray-300">
          All Rights Reserved © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
