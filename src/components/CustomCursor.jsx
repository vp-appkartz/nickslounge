import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' || 
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 14,
      y: mousePosition.y - 14,
      scale: 1,
      opacity: 0.85
    },
    hover: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      scale: 1.3,
      opacity: 0.6
    }
  };

  return (
    <>
      <style>
        {`
          body {
            cursor: none !important;
          }
          a, button, input {
            cursor: none !important;
          }
        `}
      </style>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ 
          x: { type: "tween", ease: "linear", duration: 0 },
          y: { type: "tween", ease: "linear", duration: 0 },
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4))'
        }}
      >
        <motion.div
           animate={isHovering ? { rotate: 25 } : { rotate: [-2, 2, -2] }}
           transition={isHovering ? { type: "spring", stiffness: 300, damping: 15 } : { repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          {/* Sleek, Minimalist Line-Art Beer Mug */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C1272D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
            <path d="M9 12v6"/>
            <path d="M13 12v6"/>
            <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"/>
            <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
