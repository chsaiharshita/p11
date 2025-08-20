import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
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

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="cursor-pointer">
      {isVisible && (
        <div onClick={scrollToTop}>
          <div className="scroll-to-top">
            <i
              className="fa fa-angle-up iconbox"
              style={{ fontSize: "32px" }}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
