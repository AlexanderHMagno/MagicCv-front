import React  from 'react';


const Presentation = () => {

    return (
        
            <div className="overflow-hidden min-h-full flex justify-center items-center">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Create your unique </span>
                            <span className="block text-indigo-600 xl:inline">CV</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Not worry about the design we have you covered, we have ready to print templates for you
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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
                        </div>
                </main>
                {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.pixabay.com/photo/2017/05/09/00/15/resume-2296951_1280.png" alt=""/>
                </div> */}
            </div>
        
    )
}


export default Presentation;    