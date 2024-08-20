import React from "react";
import {
    Typography,
  } from "@material-tailwind/react";


export function AboutMe(){
    return(
        <section id="about-me"  className="flex flex-col items-center min-h-screen mx-auto sm:mx-8 bg-[url('./assets/z12.jpg')] sm:bg-contain bg-center bg-no-repeat">
            <div className="px-4 divide-y-4 divide-purple-400 sm:w-3/5">
            <Typography 
            variant="h1"
            color="purple"
            className="font-mono mt-32 bg-gradient-to-r from-rose-400 to-blue-400 text-transparent bg-clip-text"
            >Hello, World!     
            </Typography>
            <Typography 
            variant="lead"
            color="white"
            className="font-serif p-4 text-gray-300"
            >                
             I'm a Computer Science graduate from IBA, Class of 2024, with 6 months of experience as a junior backend developer.<br />
             Passionate about learning, I am always on the lookout for new challenges that push my boundaries. <br/>Problem-solving is more than just a skill for me—it's a source of fulfillment.
            </Typography>
            </div>
            


        </section>
    )
}
export default AboutMe;