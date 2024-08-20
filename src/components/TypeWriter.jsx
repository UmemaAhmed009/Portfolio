import React from "react";
import {useState, useEffect} from "react";
import '../constants/HeroSection.css';

const useTypeWriter = (text, speed = 100) =>{
    const[displayText, setDisplayText] = useState();

    useEffect(() =>{
      let i=0;
      setDisplayText('')
      const typingInterval = setInterval(() => {
        if(i < text.length){
          setDisplayText((prevText) => (prevText + text.charAt(i)));
          i++;
        }
        else{
          clearInterval(typingInterval);
        }
      }, speed)
      return () =>{
        clearInterval(typingInterval)
      };
    }, [text, speed])
    return displayText;
  }

  const TypeWriter = ({ text, speed, withGradient }) => {
    const displayText = useTypeWriter(text,speed);
    return <span className={withGradient ? "bg-gradient-to-l from-lime-600 to-teal-700 text-transparent bg-clip-text" : ""}>{displayText}</span>
  }

  export default TypeWriter;