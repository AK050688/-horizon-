import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import horizonlogo from "../assets/slider/horizonlogo.webp"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { MultiLevelSidebar } from "./SideBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-10">
<div className="flex items-center lg:justify-between justify-center lg:px-9 lg:py-2 tracking-tighter bg-[#FBAF2B]">
  <div className="flex items-center gap-3">
    <p className="hidden lg:block">
      Call{" "}
      <Link
        to="tel:+917558843666"
        className="text-white font-bold hover:text-gray-200"
        aria-label="Call (+91) 75588 43666"
      >
        (+91) 75588 43666 • 0474 2941700
      </Link>
    </p>
    <div className="flex items-center gap-2">
      <p className="hidden lg:block text-white">Follow Us</p>
      <Link
        className="hidden lg:block"
        to="https://fb.com/dpskollam"
        target="_blank"
        aria-label="Follow us on Facebook"
      >
        <FaFacebookF className="text-white hover:text-gray-200 transition-colors transform hover:scale-110 cursor-pointer" />
      </Link>
      <Link
        className="hidden lg:block"
        to="https://instagram.com/dpskollam"
        target="_blank"
        aria-label="Follow us on Instagram"
      >
        <FaInstagram className="text-white hover:text-gray-200 transition-colors transform hover:scale-110 cursor-pointer" />
      </Link>
      <Link
        className="hidden lg:block"
        to="https://in.linkedin.com/company/dpskollam"
        target="_blank"
        aria-label="Follow us on LinkedIn"
      >
        <FaLinkedinIn className="text-white hover:text-gray-200 transition-colors transform hover:scale-110 cursor-pointer" />
      </Link>
    </div>
  </div>

  <div className="flex items-center gap-2">
    <Link
      to="/admission/form"
      className="text-white bg-[#FBC02D] px-2 py-1 rounded-sm animate-gradient transition-all duration-500 hidden lg:block hover:bg-[#FBAF2B]" // Darker shade for hover effect
      aria-label="Admission Open | Click Here To Apply"
    >
      Admission Open | Click Here To Apply
    </Link>
  </div>
</div>


      <hr />

      <nav className="sm:h-20 h-28 flex justify-between px- md:px-9 items-center tracking-tight bg-white shadow-md">
        <div>
          <Link to="/">
          <img
            src={horizonlogo}
            alt="horizonlogo"
            className="max-w-full h-12 sm:h-21"
          />
          </Link>
        
        </div>

        <div className="xl:hidden">
          <button
            className="hover:bg-transparent focus:shadow-none hover:scale-125"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            {!isMenuOpen && (
              <RiMenu3Fill className="text-2xl text-primary-800 " />
            )}
          </button>
        </div>

        <ul className="hidden xl:flex flex-wrap justify-center gap-3 text-[14px] font-medium">
        <li className="group relative h-36 content-center cursor-pointer ">
  <Link to="/" className="block   text-gray-800 hover:text-green-900 transition duration-300
   hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg">
    Home
  </Link>
</li>


          <li className="group relative h-36 content-center cursor-pointer  hover:text-green-900 transition duration-300">
            <Link 
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="#">About Us</Link>
            <ul
              className={`menu-dropdown transition-all duration-500 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96`}
            >
              <li>
                <Link to="/about/our-school" className="menu-list">
                  Our School
                </Link>
              </li>
              <li>
                <Link to="/about/vision-mission" className="menu-list">
                  Vision and Mission
                </Link>
              </li>
              <li>
                <Link to="/about/dps-society" className="menu-list">
                  DPS Society
                </Link>
              </li>
            </ul>
          </li>

          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="#">Circular</Link>
            <ul className="menu-dropdown">
              <li>
                <Link to="/circular/academic" className="menu-list">
                  Academic
                </Link>
              </li>
              <li>
                <Link to="/circular/non-academic" className="menu-list">
                  Non Academic
                </Link>
              </li>
            </ul>
          </li>

          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="/hostel">Hostel</Link>
          </li>
          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link 
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="#">Our Campus</Link>
            <ul className="menu-dropdown">
              <li>
                <Link to="/campus/facilities" className="menu-list">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/campus/gallery" className="menu-list">
                  Gallery
                </Link>
              </li>
            </ul>
          </li>

          <li className="group relative h-36 content-center cursor-pointer hover:text-green-800 transition duration-300">
            <Link 
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="#">Admission</Link>
            <ul className="menu-dropdown">
              <li>
                <Link to="/admission/process" className="menu-list">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link to="/admission/form" className="menu-list">
                  Admission Form
                </Link>
              </li>
              <li>
                <Link to="/admission/hostel-form" className="menu-list">
                  Hostel Form
                </Link>
              </li>
            </ul>
          </li>

          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link 
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="#">Academics</Link>
            <ul className="menu-dropdown">
              <li>
                <Link to="/academics/primary" className="menu-list">
                  Primary
                </Link>
              </li>
              <li>
                <Link to="/academics/middle-school" className="menu-list">
                  Middle School
                </Link>
              </li>
              <li>
                <Link to="/academics/secondary" className="menu-list">
                  Secondary
                </Link>
              </li>
              <li>
                <Link to="/academics/senior-secondary" className="menu-list">
                  Senior Secondary
                </Link>
              </li>
              <li>
                <Link to="/academics/scholars-badge" className="menu-list">
                  Scholar&apos;s Badge
                </Link>
              </li>
            </ul>
          </li>

          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300 ">
            <Link
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="#">Activities</Link>
            <ul className="menu-dropdown">
              <li>
                <Link to="/activities/student-council" className="menu-list">
                  Student Council
                </Link>
              </li>
              <li>
                <Link to="/activities/co-curricular" className="menu-list">
                  Co-Curricular
                </Link>
              </li>
              <li>
                <Link to="/activities/arts" className="menu-list">
                  Arts
                </Link>
              </li>
              <li>
                <Link to="/activities/sports" className="menu-list">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/activities/clubs" className="menu-list">
                  Clubs
                </Link>
              </li>
              <li>
                <Link to="/activities/field" className="menu-list">
                  Field Trips & Excursions
                </Link>
              </li>
              <li>
                <Link to="/activities/assemblies" className="menu-list">
                  Assemblies
                </Link>
              </li>
              <li>
                <Link to="/activities/newsletter" className="menu-list">
                  Newsletter
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="/news-events">News & Events</Link>
          </li>
          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="/career">Career</Link>
          </li>
          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link 
             className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
            to="#">Staff Corner</Link>
            <ul className="menu-dropdown">
              <li>
                <Link to="/staff-corner/enrichment" className="menu-list">
                  Staff Enrichment Corner
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative h-36 content-center cursor-pointer hover:text-green-900 transition duration-300">
            <Link
            className="hover:bg-[#FDEAB3] transition duration-300 px-2 py-1 rounded-lg"
             to="/contactus">Contact Us</Link>
          </li>
          {/* <li className="group relative h-36 content-center cursor-pointer bg">
            <Link
              className="text-white px-2 py-1 rounded-sm animate-gradient bg-apple-500 transition-all duration-500 "
              to="/teachersdashboard"
            >
              Dashboard
            </Link>
          </li> */}

          <li className="group relative h-36 content-center cursor-pointer bg">
            <Link
              className="text-white px-2 py-1 rounded-sm animate-gradient bg-apple-500 transition-all duration-500 "
              to="/studentLogin"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div
          className="absolute z-30 top-0 left-0 w-full h-screen backdrop-blur-xs"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`sidebar fixed top-0 right-0 h-screen sm:w-2/4 w-4/5 bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-auto z-50`}
      >
        <MultiLevelSidebar setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
