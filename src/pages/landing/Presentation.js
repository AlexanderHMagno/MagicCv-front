import React  from 'react';

import {Link} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typed from 'react-typed';
import Grow from '@material-ui/core/Grow';

import {TEMPLATEOPTIONS} from '../templates/options/templateOptions';
import LATEST from './features/Latest';

const Presentation = () => {

    return (
        
            <div className="min-h-full">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="mx-auto sm:text-center lg:text-left" >
                            <h1 className="text-6xl tracking-tight font-extrabold text-center">
                                <span className="inline xl:inline">Create your unique</span>
                                <span className="block text-indigo-600 xl:inline">
                                <span className="text-white -ml-1">-</span>
                                <Typed
                                    strings={[ 'Resume', 'CV',"Career"]}
                                    loop
                                    showCursor = {false} 
                                    typeSpeed={60}
                                    backDelay ={3000}
                                    backSpeed = {40}

                                />

                                </span>
                                
                            </h1>
                            <p className="text-center mt-3  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
                                Not worry about the design, we have ready to print templates
                            </p>
                            <div className="mx-auto mt-5 sm:mt-8 sm:flex sm:justify-center ">
                                <div className="rounded-md shadow">

                                <Link 
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                to={'/register'}>
                                    Register
                                </Link>
                                
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">

                                <Link 
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                to={'/login'}>
                                    Login
                                </Link>
                            
                                </div>
                            </div>
                            <div className="h-3/4 min-h-full w-full sm:w-3/5 mx-auto">
                                <Grow timeout={2000} in={true}>
                                    <img alt={"People Working"} className="p-10" src={"images/presentation/people.png"}></img>
                                </Grow>
                            </div>
                        </div>

                        {/* Second Group */}
                        <div className="mx-auto sm:text-center lg:text-left bg-gradient-to-r from-white via-indigo-100 to-white p-10  sm:flex">
                            <div className="py-14 lg:px-24"> 
                                <h1 className="text-4xl tracking-tight font-extrabold text-center lg:mb-20">
                                    <span className="inline xl:inline">Write once, choose from multiple templates</span>
                                </h1>
                                <p className="mt-3  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl  ">
                                    Write your resume once, then you can choose any of our multiple templates. You wont need to start from scratch everytime. 
                                </p>

                                <Link 
                                className="hidden sm:block text-center w-full mt-10 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                to={'/login'}>
                                    Select your Template
                                </Link>
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
                                <h1 className="text-4xl tracking-tight font-extrabold text-center mb-10 lg:mb-20">
                                    <span className="inline xl:inline">How it works?</span>
                                </h1>
                                <div className="p-2 text-gray-500 text-lg sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
                                    <Badge  color="primary" variant="standard" style={{marginRight:10}}>
                                        <Image style={{width:50}} src={"images/presentation/flaticon/chat.png"}  />
                                    </Badge>
                                    Write your Resume
                                </div>
                                <div className="p-2 text-gray-500 text-lg sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
                                    <Badge color="primary" variant="standard" style={{marginRight:10}}>
                                        <Image style={{width:50}}  src={"images/presentation/flaticon/tasks.png"}  />
                                    </Badge>
                                    Choose a template
                                </div>
                                <div className="p-2 text-gray-500 text-lg sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
                                    <Badge color="primary" variant="standard" style={{marginRight:10}}>
                                        <Image style={{width:50}} src={"images/presentation/flaticon/download.png"}  />
                                    </Badge>
                                    Download Your Resume
                        
                                </div>

                                <div className="rounded-md pt-10">
                                    <Link 
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                    to={'/login'}>
                                        Start Now
                                    </Link>
                                </div>
                            </div>

                        </div>
                                    
                        <LATEST/>
                </main>

                {/* Base form */}
                <LazyLoadComponent delayTime="1000">
                <div className="w-screen bg-gradient-to-r bg-indigo-600 p-10">
                    <div className=" flex  md:justify-center sm:w-3/5  flex-g sm:pr-10"> 
                        <img className="mr-10 md:mx-auto" src="images/magicL.png" alt="process working"/>
                        

                        <Typography style={{color:"white", paddingTop: 20}}>Copyright ?? 2021 all rights reserved, Magic Cv Inc.</Typography>

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

                    Icons:

                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
        
    )
}


export default Presentation;    