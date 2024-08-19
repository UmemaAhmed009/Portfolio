import React from "react";
import '../constants/HeroSection.css';
import {
  Typography,
} from "@material-tailwind/react";
// import {
//   RectangleStackIcon,
//   UserCircleIcon,
//   CommandLineIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/24/solid";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// interface NavItemPropsType {
//   children: React.ReactNode;
// }

// function NavItem({ children }: NavItemPropsType) {
//   return (
//     <li>
//       <Typography
//         as="a"
//         href="#"
//         variant="paragraph"
//         color="blue-gray"
//         className="text-blue-gray-700 flex items-center gap-2 font-medium"
//       >
//         {children}
//       </Typography>
//     </li>
//   );
// }

export function HeroSection() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <header className="mb-16 mx-auto max-w-screen-xl p-24">
        <div class="flex flex-row flex-nowrap">
        {/* <div className="flex-initial min-h-[50vh] w-2.2/3 lg:h-[20rem] md:h-[34rem] bg-white"> */}
            <div className="flex-1 min-h-[50vh] w-2.2/3 lg:h-[20rem] md:h-[34rem]">
                <div className="container mx-auto px-4 text-left">
                    <Typography
                    variant="h1"
                    color="white"
                    className="font-sans text-left my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                    >
                    Hi,<br />
                    I'm Umema,<br />
                    <span className="animate-slidein opacity-0 forwards ... bg-gradient-to-l from-[#000000] to-teal-700 leading-snug ">
                        software developer.
                    </span>
                    </Typography>
                    <Typography
                    variant="lead"
                    className="mx-auto w-full !text-[#c8cacf] lg:text-lg text-base "
                    >
                    I craft innovative solutions with code and creativity. <br></br>CS graduate from IBA. Based in Karachi. 
                    </Typography>
                    <div class="mt-6 flex flex-wrap gap-8">

                        <a href="https://wa.me/+923342888097" target="_blank" rel="noopener noreferrer">
                        <button class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512" fill="#c8cacf">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                            </svg>
                        </button>
                        </a>

                        <a href="https://www.linkedin.com/in/umema-ahmed-4b0630214/" target="_blank" rel="noopener noreferrer">
                        <button class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                        fill="none">
                        <path
                            d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                            fill="#c8cacf" />
                        </svg>
                        </button>
                        </a>

                        <a href="https://github.com/UmemaAhmed009" target="_blank" rel="noopener noreferrer">
                        <button class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 64 64" fill="none">
                            <path d="M32 4C15.431 4 2 17.431 2 34c0 13.879 8.989 25.592 21.46 29.74 1.572.29 2.149-1.146 2.149-2.541 0-1.256-.045-5.55-.073-10.143-8.628 1.875-10.456-4.155-10.456-4.155-1.406-3.577-3.424-4.527-3.424-4.527-2.801-1.917.21-1.88.21-1.88 3.1.219 4.73 3.18 4.73 3.18 2.767 4.74 7.275 3.37 9.057 2.58.287-2.002 1.082-3.37 1.972-4.14-6.902-.781-14.157-3.451-14.157-15.338 0-3.392 1.21-6.15 3.184-8.318-.318-.782-1.38-3.928.304-8.192 0 0 2.53-.81 8.27 3.08 2.39-.663 4.947-.997 7.496-1.005 2.549.008 5.106.342 7.53 1.015 5.74-3.88 8.2-3.07 8.2-3.07 1.688 4.262.644 7.396.32 8.18 1.955 2.165 3.143 4.89 3.143 8.28 0 11.934-7.267 14.545-14.185 15.305 1.097.948 2.078 2.823 2.078 5.711 0 4.13-.038 7.46-.038 8.485 0 1.402.58 2.832 2.16 2.501C53.017 59.598 62 47.877 62 34 62 17.431 48.569 4 32 4z" fill="#c8cacf"/>
                        </svg>
                        </button>
                        </a>

                        <a href="mailto:umemaahmed46@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M12 13.065l8.485-5.655V18.06A1.935 1.935 0 0 1 18.545 20H5.455A1.935 1.935 0 0 1 3.515 18.06V7.41l8.485 5.655Zm-.75-1.125L3 6.5v-.75A1.735 1.735 0 0 1 4.735 4h14.53A1.735 1.735 0 0 1 21 5.75v.75l-8.25 5.44a1.25 1.25 0 0 1-1.5 0Z" fill="#c8cacf"/>
                        </svg>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 ml-30 w-full h-[50vh] bg-[url('./assets/astronaut.png')] bg-cover bg-center bg-no-repeat bounce">

            </div>
        </div>
      </header>
    </>
  );
}

