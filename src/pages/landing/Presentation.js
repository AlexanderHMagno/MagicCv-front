import React  from 'react';


const Presentation = () => {

    return (
        
            <div className="overflow-hidden min-h-full flex ">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="mx-auto sm:text-center lg:text-left h-full">
                            <h1 className="text-6xl tracking-tight font-extrabold text-center">
                                <span className="inline xl:inline">Create your unique </span>
                                <span className="inline text-indigo-600 xl:inline">CV</span>
                            </h1>
                            <p className="mt-3  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
                                Not worry about the design we have you covered, we have ready to print templates for you
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
                            <div>
                                <img className="w-4/5 sm:w-2/3 lg:w-3/5 mx-auto" src="images/presentation/people.png" alt="people working"/>
                            </div>
                        </div>
                </main>
                {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.pixabay.com/photo/2017/05/09/00/15/resume-2296951_1280.png" alt=""/>
                </div> */}

                <div className="hidden">

                    <span>Attributes</span>
                    <span>working image: </span>
                    <a href='https://pngtree.com/so/education-clipart'>education clipart png from pngtree.com</a>
                    <span>people image: </span>
                    <a href='https://pngtree.com/so/app'>app png from pngtree.com</a>
                </div>
            </div>
        
    )
}


export default Presentation;    