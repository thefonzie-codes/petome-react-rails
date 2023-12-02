import { useState, useEffect } from "react";

// export default function Typerwriter({ text }) {
//   const [index, setIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     if (index < text.length) {
//       setTimeout(() => {
//         setDisplayText(prevDisplayText => prevDisplayText + text[index]);
//         setIndex(prevIndex => prevIndex + 1);
//       }, 50);

//       return () => clearTimeout();
//     }
//   }, [index, text]);

//   return <span>{text}</span>
// }

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } 
    // else if (infinite) { // ADD THIS CHECK
    //   setCurrentIndex(0);
    //   setCurrentText('');
    // }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <>{currentText}</>;
};

export default Typewriter;

