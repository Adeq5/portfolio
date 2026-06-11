import "./Text.css";
import { useEffect, useRef } from "react";
const Text = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollPosition = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const translateXValue = 2500 - (scrollPosition / maxScroll) * 4500; // Allow negative values
        textRef.current.style.transform = `translateX(${translateXValue}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-container">
      <p className="text-content" ref={textRef}></p>
      <hr className="custom-hr" />
    </div>
  );
};

export default Text;
