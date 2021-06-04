import React  from 'react';
import {TEMPLATEOPTIONS} from '../templates/options/templateOptions';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Presentation = () => {

    return (
        
            <div className="min-h-full">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="mx-auto sm:text-center lg:text-left" >
                            <h1 className="text-6xl tracking-tight font-extrabold text-center">
                                <span className="inline xl:inline">Create your unique </span>
                                <span className="inline text-indigo-600 xl:inline">CV</span>
                            </h1>
                            <p className="mt-3  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
                                Not worry about the design, we have ready to print templates for you
                            </p>
                            <div className="mx-auto mt-5 sm:mt-8 sm:flex sm:justify-center ">
                                <div className="rounded-md shadow">
                                <a href="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                    Register
                                </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                    Login
                                </a>
                                </div>
                            </div>
                            <div className="mt-28 -mb-20 md:mt-12 md:mb-10">
                            <LazyLoadImage
                                className="w-4/5 sm:w-2/3 lg:w-3/5 mx-auto"
                                alt={"people Working"}
                                effect="blur"
                                delayMethod="debounce"
                                height="55vh"
                                src={"images/presentation/people.png"} // use normal <img> attributes as props
                                 />
        
                            </div>
                        </div>

                        {/* Second Group */}
                        <div className="mx-auto sm:text-center lg:text-left bg-gradient-to-r from-white via-indigo-100 to-white p-10  sm:flex">
                            <div className="py-14 lg:px-24"> 
                                <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-center lg:mb-20">
                                    <span className="inline xl:inline">Write once, choose from multiple templates</span>
                                </h1>
                                <p className="mt-3  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl ">
                                    Write your resume once, then you can choose any of our multiple templates. You wont need to start from scratch everytime. 
                                </p>
                                <a href="/login" className="hidden sm:block text-center w-full mt-10 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                    Select your Template
                                </a>
                            </div>
                            <div className="sm:p-14 flex justify-center flex-g"> 
                                {/* <img className="w-4/5 sm:w-2/3 lg:w-3/5 mx-auto" src="images/presentation/group.png" alt="people working"/> */}
                                <Carousel style={{margin:"auto"}} width={300} autoPlay showThumbs={false} infiniteLoop={true}>

                                    {TEMPLATEOPTIONS.map((element,index) => {
                                        
                                        return <div 
                                            key={index}            
                                                >
                                                <Image size="medium" src={element.image}  />
                                        </div>
                                    })}
                                </Carousel>   
                            </div>
                        </div>

                        {/* Third Group */}
                        <div className="mx-auto sm:text-center lg:text-left p-10 flex flex-col-reverse sm:flex-row">

                            <div className=" flex justify-center sm:w-3/5  flex-g sm:pr-10"> 
                                <img className="mx-auto" src="images/presentation/process.png" alt="process working"/>
                            </div>
                            <div className="py-14"> 
                                <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-center mb-10 lg:mb-20">
                                    <span className="inline xl:inline">How it works?</span>
                                </h1>
                                <div className="p-2 text-gray-500 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl">
                                    <Badge color="primary" variant="standard" style={{marginRight:10}}>
                                        <SpellcheckIcon  color="primary"/>
                                    </Badge>
                                    Write your Resume
                                </div>
                                <div className="p-2 text-gray-500 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl">
                                    <Badge color="primary" variant="standard" style={{marginRight:10}}>
                                        <FileCopyIcon  color="primary"/>
                                    </Badge>
                                    Choose a template
                                </div>
                                <div className="p-2 text-gray-500 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl">
                                    <Badge color="primary" variant="standard" style={{marginRight:10}}>
                                        <SystemUpdateAltIcon  color="primary"/>
                                    </Badge>
                                    Download Your Resume
                        
                                </div>

                                <div className="rounded-md shadow pt-10">
                                <a href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                    Start Now
                                </a>
                                </div>
                            </div>

                        </div>

                </main>

                {/* Base form */}
                <LazyLoadComponent delayTime="1000">
                <div className="w-screen bg-gradient-to-r bg-indigo-600 p-10">
                    <div className=" flex  md:justify-center sm:w-3/5  flex-g sm:pr-10"> 
                        <img className="mr-10 md:mx-auto" src="images/magicL.png" alt="process working"/>
                        

                        <Typography style={{color:"white", paddingTop: 20}}>Copyright © 2021 all rights reserved, Magic Cv Inc.</Typography>

                    </div>
                </div>
                </LazyLoadComponent>

                <div className="hidden">

                    <span>Attributes</span>
                    <span>working image: </span>
                    <a href='https://pngtree.com/so/education-clipart'>education clipart png from pngtree.com</a>
                    <span>people image: </span>
                    <a href='https://pngtree.com/so/app'>app png from pngtree.com</a>
                    <span>group image: </span>
                    <a href='https://pngtree.com/so/success-clipart'>success clipart png from pngtree.com</a>
                    <span>process image: </span>
                    <a href='https://pngtree.com/so/data'>data png from pngtree.com</a>
                </div>
            </div>
        
    )
}


export default Presentation;    