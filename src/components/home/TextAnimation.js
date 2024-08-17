import React, { useEffect, useState } from "react";

const TextAnimation = ({ words, delay, wordDelay, infinite }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const colors = ['#fe8d59','#b5cea8','#4fc1ff','#da70d6','#dcdcaa']

  const currentColor = colors[currentWordIndex % colors.length];

  useEffect(() => {
    let timeout;

    if (words && words.length > 0) {
      const currentWordLength = words[currentWordIndex].length;

      if (currentLetterIndex < currentWordLength) {
        timeout = setTimeout(() => {
          setCurrentWord((prevWord) => prevWord + words[currentWordIndex][currentLetterIndex]);
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (currentWordIndex < words.length - 1) {
        // Move to the next word after the extra word delay
        timeout = setTimeout(() => {
          setCurrentWord("");
          setCurrentLetterIndex(0);
          setCurrentWordIndex((prevIndex) => prevIndex + 1);
        }, wordDelay);
      } else if (infinite) {
        // Reset to the first word after the extra word delay if infinite looping is enabled
        timeout = setTimeout(() => {
          setCurrentWord("");
          setCurrentLetterIndex(0);
          setCurrentWordIndex(0);
        }, wordDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentLetterIndex, currentWordIndex, delay, wordDelay, infinite, words]);

  return <span  style={{ color: currentColor,fontSize: '60px',letterSpacing:'-5px' }}>{currentWord}</span>;
};

export default TextAnimation;
