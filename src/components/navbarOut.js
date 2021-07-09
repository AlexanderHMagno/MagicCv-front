import React, {useState} from 'react';
import Submenu from '../util/BurguerMenu';
import {Link} from 'react-router-dom';
import { Image } from 'semantic-ui-react';


// Short menu options
const options = [
  {text:'Product', path : '/product'},
  {text:'Feature', path : '/feature'},
  {text:'Login', path : '/login'},
  {text:'Register', path : '/register'},
];


const Menubar = () => {
    const path = window.location.pathname;
    const currentPath = path === "/"? "Home": path.substring(1);
    
    const defaulty = 'font-medium text-gray-500 hover:text-gray-900';
    const active = 'font-medium text-indigo-600 hover:text-indigo-500';

    return (
        
        <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white lg:w-full ">

        <div className="w-full relative pt-6 px-4 sm:px-6 lg:px-8  ">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to={'/'}>
                        <span className="sr-only">Magic Cv</span>
                        <Image className="h-10  sm:h-10" size="tiny" src={"/images/cv.png"} alt="logo"  />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                        <Submenu options={options}/>
                    </div>
                    </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <Link className={currentPath === 'Home' ? active : defaulty} to={'/'}>Product</Link>
                
                    <Link className={currentPath === 'feature' ? active : defaulty} to={'/feature'}>Feature</Link>

                    <Link className={currentPath === 'company' ? active : defaulty} to={'/company'}>Company</Link>

                    <Link className={currentPath === 'register' ? active : defaulty} to={'/register'}>Register</Link>

                    <Link className="inline-block border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10" to={'/login'}> Login</Link>
            
                </div>
            </nav>
        </div>

        </div>
    </div>
    )

}

export default Menubar;