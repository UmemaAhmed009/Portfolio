import React, {useState} from "react";
import '../constants/Projects.css'
import ktateb from '../assets/Ktateb.png'
import fyp from '../assets/FYP.png'
import cloudlit from '../assets/Cloudlit.png'
import fun2learn from '../assets/Fun2Learn.png'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export function Projects() {
    return (
    <div id="projects" className="px-4 pt-24">
        <Typography
            variant="h1"
            color="white"
            className="font-serif"
        >Featured Projects
        </Typography>
        <Typography
            variant="lead"
            color="white"
            className="font-serif text-2xl"
        >Have a look at some of my highlighted projects
        </Typography>
        

      {/* <section className="flex flex-row flex-wrap justify-center gap-4 p-8 "> */}
      <section className="relative py-12">
      <div className="flex flex-wrap justify-center gap-4">
      {/* <div class="flex justify-center overflow-x-scroll hide-scroll-bar space-x-6"> */}
        {/* h-screen place-items-center p-4 */}
        <div class="w-full sm:w-72 lg:w-80 flex-shrink rounded-lg shadow-lg bg-white">
                <img class="rounded-t-lg w-full" src={ktateb} alt="Ktateb"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">Ktateb</h3>
                    <p class="text-gray-700">Worked on backend of this ed-tech mobile app for a Saudi client during my part-time job in WonderTech.</p>
                </div>
            </div>
        <div class="w-full sm:w-72 lg:w-80 flex-shrink-0 w-72 rounded-lg shadow-lg bg-white">
                <img class="rounded-t-lg w-full" src={cloudlit} alt="Cloudlit website"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">Cloudlit website</h3>
                    <p class="text-gray-700">A fully-responsive portfolio website for a cloud-based startup.</p>
                </div>
                <div class="px-6 pb-6 flex justify-between items-center">
                    <a href="https://cloudlit.co" target="_blank" rel="noopener noreferrer"  class="text-teal-500 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" viewBox="0 0 512 512" fill="currentColor">
                    <path
                      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3v82.7c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-500" viewBox="0 0 24 24" stroke="currentColor">
                    <path 
                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                    fill="#008080"/>
                    </svg>
                </div>
            </div>
        <div class="w-full sm:w-72 lg:w-80 flex-shrink-0 w-72 rounded-lg shadow-lg bg-white">
                <img class="rounded-t-lg w-full" src={fyp} alt="Final Year Project"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">X-ray Auto Reporting</h3>
                    <p class="text-gray-700">A pneumonia auto-detection system in collaboration with Indus Hospital.</p>
                </div>
                <div class="px-6 pb-6 flex justify-between items-center">
                    <a href="https://github.com/UmemaAhmed009/FYP-INDUS" target="_blank" rel="noopener noreferrer"  class="text-teal-500 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" viewBox="0 0 512 512" fill="currentColor">
                    <path
                      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3v82.7c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                  </a>
                </div>
            </div>
        <div class="w-full sm:w-72 lg:w-80 flex-shrink-0 w-72 rounded-lg shadow-lg bg-white">
                <img class="rounded-t-lg w-full" src={fun2learn} alt="Fun2Learn"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">Fun2Learn</h3>
                    <p class="text-gray-700">An interactive and easy to use educational website for kids.</p>
                </div>
                <div class="px-6 pb-6 mt-6 flex justify-between items-center">
                    <a href="https://github.com/UmemaAhmed009/Web-Dev-Backend" target="_blank" rel="noopener noreferrer"  class="text-teal-500 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" viewBox="0 0 512 512" fill="currentColor">
                    <path
                      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3v82.7c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      fill="currentColor"
                    />
                  </svg>
                    </a>
                </div>
          </div>
    </div>
        </section>
      <a href="/resume/Umema Resume_SE.pdf" target="_blank" rel="noopener noreferrer" download="umema_resume.pdf">
      <Button className="flex flex-row items-center justify-center mx-auto mt-6">
      <Typography variant="small" className="text-gray-300 hover:text-white">
        Download CV
        </Typography>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      </Button>

      </a>
    
      </div>
    );
  }
  
  export default Projects;
  