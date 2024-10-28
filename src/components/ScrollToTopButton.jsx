import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex flex-col fixed bottom-0 right-0 w-12 h-12 bg-[#FBAF2B] text-white font-bold text-lg rounded-sm shadow-lg items-center justify-center hover:w-12 hover:h-12 group hover:bg-[#FBAF2B]"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp size={40} className="group-hover:animate-bounce leading-relaxed" />
          <span className="group-hover:hidden leading-tight">Top</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
