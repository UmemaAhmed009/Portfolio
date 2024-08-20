import React from "react";
import image from "../assets/bg.png"

export function AboutMe(){
    // px-4 py-16 mb-16 mx-auto max-w-screen-xl bg-[url('./assets/bg.png')] bg-cover bg-center sm:bg-right-top md:bg-center lg:bg-cover min-h-screen"
    return(
        <section id="about-me" className="px-4 py-12 mb-4 mx-2 lg:mx-auto max-w-screen-xl bg-[url('./assets/bg.png')] bg-contain bg-no-repeat bg-center md:bg-cover sm:bg-right-top md:bg-center lg:bg-cover min-h-screen sm:px-8 md:px-16 lg:px-24 xl:px-32">
        </section>
        // <section
    //   id="about-me"
    //   className="relative min-h-screen px-4 py-12 mb-4 mx-2 lg:mx-auto max-w-screen-xl sm:px-8 md:px-16 lg:px-24 xl:px-32"
    // >
    //   {/* Background Image Container */}
    //   <div className="absolute inset-0">
    //     <img
    //       src={image}
    //       alt="About Me Background"
    //       className="w-full h-full object-fit object-center sm:object-right-top md:object-center"
    //     />
    //   </div>
    // </section>
    //     // <section id="about-me" className="py-12">
    //     //   <div class="w-full sm:w-72 lg:w-80 flex-shrink rounded-lg">
    //     //           <img class="rounded-t-lg w-full" src={bg} alt="About-Me Image"></img>
    //     // </div>
    //     // </section>

    )
}
export default AboutMe;