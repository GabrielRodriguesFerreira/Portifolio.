import React, { useRef, useEffect, useState } from "react";
import styles from "../../Styles/box.module.css";

const Box = ({ children }) => {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const boxTop = boxRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight - 50) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.box} ${isVisible ? styles.reveal : ""}`}
      ref={boxRef}
    >
      {children}
    </div>
  );
};

export default Box;
