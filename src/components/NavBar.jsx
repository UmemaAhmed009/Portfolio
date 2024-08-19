import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
 
export function NavBar() {
  return (
    // <Navbar
    //   variant="gradient"
    //   color="teal"
    //   className="mx-auto max-w-screen-xxxl from-black to-teal px-4 py-3"
      // className="mx-auto max-w-screen-xxxl bg-opacity-80 px-4 py-3"

    // >
    //  {/* <Navbar */}
    //   {/* //   variant="gradient"
    //   //   color="black"
    //   //   className="mx-auto max-w-screen-xxxl bg-gradient-to-r from-black via-#002244 to-#003366 bg-opacity-80 px-4 py-3"
    //   // > */}
    <Navbar
  // variant="gradient"
  // color="transparent"
  className="sticky top-8 z-50 mx-auto max-w-screen-lg bg-gray-900 px-4 py-3 rounded-full border-teal-900 "
>

      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <img className="h-12 w-12"
          src ="/logo.png"
        ></img>
        <div className="ml-auto flex gap-1 md:mr-4">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 hover:text-teal-500"
        >
          Home
        </Typography>
        <Typography
          as="a"
          href="#about-me"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 hover:text-teal-500"
        >
          About Me
        </Typography>
          <Typography
          as="a"
          href="#projects"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 hover:text-teal-500"
        >
          Projects
        </Typography>
        <Typography
          as="a"
          href="#skills"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 hover:text-teal-500"
        >
          Skills
        </Typography>
          {/* <IconButton variant="text" color="white">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="white">
            <BellIcon className="h-4 w-4" />
          </IconButton> */}
        </div>
        {/* <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div> */}
      </div>
    </Navbar>
  );
}