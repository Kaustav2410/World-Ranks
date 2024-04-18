import React from 'react';

export const SkeletonCountryHome = () => {

    return (
        <div className='bg-blackish z-10 flex flex-col -mt-20 mx-auto w-[600px] max-lg:max-w-[min(700px,100%)] sm:pb-5 rounded-2xl min-h-screen px-8 gap-10 justify-center mb-20'>
            <div className="relative flex justify-center items-center -mt-10  animate-pulse w-full h-60">
                <svg
            className="max-w-[250px] h-60 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
            >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
        </div>
        <div className='flex flex-col items-center animate-pulse  '>
            <div className="h-6 bg-light-gray rounded-full mb-4 w-1/3"></div>
            <div className="h-6 bg-light-gray  rounded-full mb-4 w-1/3"></div>
        </div>
        <div className='flex items-center gap-5 justify-center animate-pulse  '>
            <div className="h-6 bg-light-gray rounded-full mb-4 w-1/3"></div>
            <div className="h-6 bg-light-gray  rounded-full mb-4 w-1/3"></div>
        </div>
        <div className='w-10/12 flex flex-col gap-12 mx-auto animate-pulse'>
            <div>
                <div className="h-6 bg-light-gray rounded-full "></div>
            </div>
            <div>
                <div className="h-6 bg-light-gray rounded-full "></div>
            </div>
            <div >
                <div className="h-6 bg-light-gray rounded-full "></div>
            </div>
            <div >
                <div className="h-6 bg-light-gray rounded-full "></div>
            </div>
            <div >
                <div className="h-6 bg-light-gray rounded-full "></div>
            </div>
        </div>

        </div>
    );
};
