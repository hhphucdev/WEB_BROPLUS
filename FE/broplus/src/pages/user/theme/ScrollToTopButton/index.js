import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Sử dụng icon từ react-icons, có thể thay thế bằng icon khác nếu muốn
import "./style.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
