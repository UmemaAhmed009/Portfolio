import React from "react";
import javaLogo from '../assets/java.png'
import pythonLogo from '../assets/python.png'
import cLogo from "../assets/letter-c.png"
import jsLogo from "../assets/js.png"
import mySQL from "../assets/mysql.png"
import oracle from "../assets/oracle.png"
import mongoDB from "../assets/images.png"
import react from "../assets/react.svg"
import redux from "../assets/redux.svg"
import tailwind from "../assets/tailwind.png"
import pytorch from "../assets/py.png"
import pandas from "../assets/pandas.png"
import numpy from "../assets/numpy.svg"
import node from "../assets/node-js.png"
import mt from "../assets/logo-mt.png"


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   

export function Skills() {
    return(
        <div id="skills" className="mt-16 pt-24"> 
            <Typography
            variant="h1"
            color="white"
            className="font-serif"
        >Skills
        </Typography>
            <Typography
            variant="h5"
            color="white"
            className="font-serif"
        >My technical expertise lies in:
        </Typography>
        <section className="flex flex-row flex-wrap px-4 justify-center gap-8 py-4">
            {/* <div className="ml-40"> */}
                        
            {/*Card 1*/}
            <Card className="w-auto max-w-[28rem] mb-4 p-4 bg-teal-500">
                <CardHeader floated={false} shadow={false} className="rounded-none bg-teal-500 pb-4">
                    <Typography variant="h2"  color="white" className="font-serif">
                        Core Tech
                    </Typography>
                    <Typography variant="h5"  color="white" className="font-serif">
                        Experienced in: 
                    </Typography>
                </CardHeader>
                <div className="flex flex-wrap justify-center mt-4 gap-2">
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                        <img
                        src={javaLogo}
                        alt="Java image"
                        className="w-10 h-10 mr-2"
                        attributionsrc="https://www.flaticon.com/free-icons/java"
                        />
                         
                         <div>
                        <Typography variant="h5" color="blue-gray">
                            Java
                        </Typography>
                        <Typography variant="small" color="blue-gray">
                            Proficient
                        </Typography>
                        </div>
                       
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={pythonLogo}
                        alt="Python image"
                        className="w-10 h-10 mr-2"
                        attributionsrc="https://www.flaticon.com/free-icons/python"
                        />
                        <div>
                        <Typography variant="h5" color="blue-gray">
                            Python
                        </Typography>
                        <Typography variant="small" color="blue-gray">
                            Intermediate
                        </Typography>
                        </div>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={cLogo}
                        alt="C image"
                        className="w-10 h-10 mr-2"
                        attributionsrc="https://www.flaticon.com/free-icons/c"
                        />
                        <div>
                        <Typography variant="h5" color="blue-gray">
                            C
                        </Typography>
                        <Typography variant="small" color="blue-gray">
                            Intermediate
                        </Typography>
                        </div>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={jsLogo}
                        alt="JS image"
                        className="w-10 h-10 mr-2"
                        attributionsrc="https://www.flaticon.com/free-icons/javascript"
                        />
                        <div>
                        <Typography variant="h5" color="blue-gray">
                            Javascript
                        </Typography>
                        <Typography variant="small" color="blue-gray">
                            Intermediate
                        </Typography>
                        </div>
                    </Card>

                {/* <div className="grid grid-cols-2 gap-1 mt-4"> */}
                <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={oracle}
                        alt="oracle image"
                        className="w-10 h-10 mr-2"
                        />   
                        <div>
                        <Typography variant="h5" color="blue-gray">
                            Oracle SQL and PL SQL
                        </Typography>
                        <Typography variant="small" color="blue-gray">
                            Advanced
                        </Typography>
                        </div>
                        
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={mySQL}
                        alt="mysql image"
                        className="w-10 h-10 mr-2"
                        />                       
                        <div>
                        <Typography variant="h5"  color="blue-gray">
                            MySQL
                        </Typography>
                        <Typography variant="small" color="blue-gray">
                            Proficient
                        </Typography>
                        </div>
                        
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={mongoDB}
                        alt="mongoDB image"
                        className="w-10 h-10 mr-2"
                        />     
                        <div>
                        <Typography variant="h5"  color="blue-gray">
                            MongoDB (NoSQL)
                        </Typography>
                        <Typography variant="small"  color="blue-gray">
                            Advanced
                        </Typography>
                        </div>
                        
                    </Card>
                </div>
            </Card>

            {/*Card 2*/}
            <Card className="w-auto max-w-[28rem] mb-4 p-4 bg-purple-400">
                <CardHeader floated={false} shadow={false} className="rounded-none pb-4 bg-inherit">
                        <Typography variant="h2" color="white" className="font-serif">
                            Libraries and Environments
                        </Typography>
                        <Typography variant="h5" color="white" className="font-serif">
                            Experience with: 
                        </Typography>

                    </CardHeader>
                    <div className="flex flex-wrap justify-center mt-4 gap-2">
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={react}
                        alt="react image"
                        className="w-10 h-10 mr-2"
                        />     
                        <Typography variant="h5" className="mt-1">
                            React
                        </Typography>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={mt}
                        alt="materialtailwind image"
                        className="w-10 h-10 mr-2"
                        />  
                        <Typography variant="h5" className="mt-1">
                            Material UI
                        </Typography>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={tailwind}
                        alt="tailwind image"
                        className="w-10 h-10 mr-2"
                        /> 
                        <Typography variant="h5" className="mt-1">
                            Tailwind
                        </Typography>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={redux}
                        alt="redux image"
                        className="w-10 h-10 mr-2"
                        /> 
                        <Typography variant="h5" className="mt-1">
                            Redux
                        </Typography>
                    </Card>

                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={node}
                        alt="node image"
                        className="w-10 h-10 mr-2"
                        /> 
                        <Typography variant="h5" className="mt-1">
                            Node.js
                        </Typography>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={pytorch}
                        alt="pytorch image"
                        className="w-10 h-10 mr-2"
                        /> 
                        <Typography variant="h5" className="mt-1">
                            Pytorch
                        </Typography>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={numpy}
                        alt="numpy image"
                        className="w-10 h-10 mr-2"
                        /> 
                        <Typography variant="h5" className="mt-1">
                            Numpy
                        </Typography>
                    </Card>
                    <Card className="flex flex-row mb-2 mr-2 px-4 py-2">
                    <img
                        src={pandas}
                        alt="pandas image"
                        className="w-20 h-10 mr-2"
                        /> 
                        <Typography variant="h5" className="mt-1">
                            Pandas
                        </Typography>
                    </Card>
                    </div>
                </Card>
        </section>
        </div>

    );
}

export default Skills;