import React from "react";
import {useState, useEffect} from "react";
import TypeWriter from "./TypeWriter";
import '../constants/HeroSection.css';
import {
  Typography,
} from "@material-tailwind/react";

export function HeroSection() {
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <header className="mx-auto min-h-screen max-w-screen-xl p-6 md:p-12 lg:p-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* <div className="flex-initial min-h-[50vh] w-2.2/3 lg:h-[20rem] md:h-[34rem] bg-white"> */}
            <div className="flex-1 min-h-[50vh] w-2.2/3 lg:h-[20rem] md:h-[34rem]">
                <div className="container mx-auto px-4 text-left">
                    <Typography
                    variant="h1"
                    // font-sans text-left my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl
                    className="font-mono my-6 w-full leading-snug  !text-4xl sm:!text-5xl md:!text-5xl lg:text-5xl xl:!text-5xl" >
                    <TypeWriter text="   Hi, I am Umema, mobile application developer." withGradient={true}/>
                    <span className="cursor">|</span>
                    </Typography>

                    <Typography
                    variant="lead"
                    className="font-serif mx-auto w-full !text-[#c8cacf] sm:text-2xl text-xl "
                    >
                    I craft innovative solutions with code and creativity. Currently exploring AI to contribute to real-world, intelligent systems. CS graduate from IBA. <br></br>Based in Karachi.[...]
                    </Typography>
                    <div className="mt-6 flex flex-wrap gap-4 md:gap-6 lg:gap-8">

                        <a href="https://wa.me/+923342888097" target="_blank" rel="noopener noreferrer">
                        <button className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512" fill="#c8cacf">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-39.1-10.2-77.3-29.6-111z"/>
                            </svg>
                        </button>
                        </a>

                        <a href="https://www.linkedin.com/in/umema-ahmed-4b0630214/" target="_blank" rel="noopener noreferrer">
                        <button className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                        <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15.2174 17.065 15.2174 19.7801C15.2174 22.4348 17.0605 24.5591 20.1542 24.5591ZM38.4693 55.999V40.2155C38.4693 35.8847 36.8109 32.8978 33.1282 32.8978C30.2265 32.8978 28.9139 34.6191 28.3424 36.2946C28.1315 36.8253 28.0707 37.5914 28.0707 38.3589V55.999H17.3264V28.3354H28.0707V32.1346C29.5656 29.7771 32.3237 26.5122 37.9326 26.5122C45.0048 26.5122 50.8973 31.2834 50.8973 41.2107V55.999H38.4693Z" fill="#c8cacf"/>
                        </svg>
                        </button>
                        </a>

                        <a href="https://github.com/UmemaAhmed009" target="_blank" rel="noopener noreferrer">
                        <button className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 64 64" fill="none">
                            <path d="M32 4C15.431 4 2 17.431 2 34c0 13.879 8.989 25.592 21.46 29.74 1.572.29 2.149-1.146 2.149-2.541 0-1.256-.045-5.55-.073-10.143-8.628 1.875-10.456-4.155-10.456-4.155-1.429-3.637-3.489-4.605-3.489-4.605-2.849-1.951.216-1.913.216-1.913 3.15.221 4.809 3.237 4.809 3.237 2.791 4.784 7.327 3.403 9.117 2.6.281-2.021 1.089-3.404 1.981-4.185-6.925-.784-14.205-3.466-14.205-15.412 0-3.404 1.215-6.182 3.208-8.359-.321-.785-1.39-3.939.304-8.214 0 0 2.618-.838 8.582 3.19 2.49-.692 5.156-1.038 7.81-1.05 2.648.012 5.318.358 7.81 1.05 5.959-4.028 8.572-3.19 8.572-3.19 1.702 4.275.632 7.429.31 8.214 1.998 2.177 3.201 4.955 3.201 8.359 0 12.002-7.293 14.618-14.242 15.38 1.12.965 2.117 2.872 2.117 5.786 0 4.18-.037 7.546-.037 8.577 0 1.408.563 3.08 2.162 2.552 12.43-4.156 21.441-15.85 21.441-29.74C62 17.431 48.569 4 32 4z" fill="#c8cacf"/>
                        </svg>
                        </button>
                        </a>

                        <a href="mailto:umemaahmed46@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M12 13.065l8.485-5.655V18.06A1.935 1.935 0 0 1 18.545 20H5.455A1.935 1.935 0 0 1 3.515 18.06V7.41l8.485 5.655Zm-.75-1.125L3 6.5v-.75A1.735 1.735 0 0 1 4.735 4h14.53A1.735 1.735 0 0 1 21 5.75v.75l-8.75 5.19z" fill="#c8cacf"/>
                        </svg>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full h-[30vh] md:h-[50vh] lg:h-[60vh] bg-[url('./assets/astronaut.png')] bg-cover bg-center bg-no-repeat bounce">

            </div>
        </div>
      </header>
    </>
  );
}
