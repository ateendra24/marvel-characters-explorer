import React from 'react';
import { Link } from "react-router-dom";

const SkeletonCard = () => {
    return (
        <div className="relative w-[327px] h-[343px] group">

            <div className="relative w-full h-full bg-[#efefef] clip-path-custom transition-transform transform group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="p-4 text-gray-800">
                    <div className='rounded-2xl w-full h-auto aspect-[3/2] overflow-hidden bg-gray-300'>
                    </div>
                    <div className="text-xl font-bold mb-2 transition-transform transform my-3 bg-gray-300 h-5 w-44 animate-pulse"></div>
                    <div className="transition-opacity opacity-60 group-hover:opacity-100 max-w-[240px] line-clamp-2 bg-gray-300 h-4 w-56 mt-6 animate-pulse"></div>
                    <div className="transition-opacity opacity-60 group-hover:opacity-100 max-w-[240px] line-clamp-2 bg-gray-300 h-4 w-56 mt-1 animate-pulse"></div>

                </div>
            </div>
            <div className='w-14 h-14 rounded-full absolute bg-[#EAEAEA] bottom-0 right-0 text-white p-2 flex justify-center items-center transition-transform transform group-hover:-translate-y-2 group-hover:rotate-12 opacity-60 group-hover:opacity-100'>
                
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.802 3.14171L2.4383 23.1243C2.20804 23.3893 1.9045 23.5715 1.59446 23.631C1.28443 23.6904 0.993283 23.6222 0.78508 23.4413C0.576877 23.2604 0.468669 22.9816 0.484264 22.6663C0.499859 22.351 0.637978 22.025 0.868235 21.76L18.2319 1.77742C18.4622 1.51243 18.7657 1.33017 19.0757 1.27072C19.3858 1.21128 19.6769 1.27952 19.8851 1.46043C20.0933 1.64135 20.2015 1.92012 20.186 2.23542C20.1704 2.55072 20.0322 2.87672 19.802 3.14171Z" fill="black" />
                    <path d="M18.9595 3.05376L3.51651 4.17445C3.16684 4.19978 2.82207 4.08512 2.55804 3.8557C2.29402 3.62628 2.13237 3.30089 2.10865 2.95111C2.08494 2.60132 2.2011 2.2558 2.43158 1.99056C2.66207 1.72531 2.98799 1.56206 3.33766 1.53673L20.0974 0.322529C20.2706 0.309762 20.4444 0.331299 20.6089 0.385904C20.7735 0.44051 20.9255 0.527111 21.0563 0.640749C21.1871 0.754387 21.294 0.892828 21.3711 1.04814C21.4481 1.20346 21.4937 1.3726 21.5052 1.54587L22.6419 18.311C22.6657 18.6608 22.5495 19.0063 22.319 19.2716C22.0885 19.5368 21.7626 19.7001 21.4129 19.7254C21.0633 19.7507 20.7185 19.6361 20.4545 19.4066C20.1904 19.1772 20.0288 18.8518 20.0051 18.502L18.9595 3.05376Z" fill="black" />
                </svg>

            </div>
        </div>
    );
};

export default SkeletonCard;
