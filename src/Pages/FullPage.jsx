import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CryptoJS from "crypto-js";

function FullPage() {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const publicKey = import.meta.env.VITE_MARVEL_PUBLICKEY;
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATEKEY;
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    const apiUrl = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                if (data.data.results.length > 0) {
                    setHero(data.data.results[0]);
                } else {
                    setError("Hero not found.");
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data: ", err.message);
                setError("Failed to fetch data.");
                setLoading(false);
            }
        };
        fetchHero();
    }, [apiUrl]);

    if (error) {
        return <p className="text-center text-xl text-red-500">{error}</p>;
    }

    return (
        <div className='bg-[#e3dede] h-[100dvh] w-full overflow-hidden'>
            <Link to={'/'} className='fixed top-5 left-6 z-10 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300'>

                <svg width="42" height="36" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_844_160)">
                        <path d="M6.90909 19H45.0909C45.5972 19 46.0828 19.158 46.4408 19.4393C46.7989 19.7206 47 20.1022 47 20.5C47 20.8978 46.7989 21.2794 46.4408 21.5607C46.0828 21.842 45.5972 22 45.0909 22H6.90909C6.40277 22 5.91718 21.842 5.55916 21.5607C5.20114 21.2794 5 20.8978 5 20.5C5 20.1022 5.20114 19.7206 5.55916 19.4393C5.91718 19.158 6.40277 19 6.90909 19Z" fill="white" />
                    </g>
                    <g filter="url(#filter1_d_844_160)">
                        <path d="M7.61068 20L23.4403 35.7528C23.7987 36.1095 24 36.5934 24 37.0978C24 37.6023 23.7987 38.0861 23.4403 38.4429C23.0819 38.7996 22.5958 39 22.089 39C21.5822 39 21.0961 38.7996 20.7378 38.4429L3.56071 21.345C3.38297 21.1686 3.24196 20.9589 3.14574 20.7281C3.04953 20.4973 3 20.2499 3 20C3 19.7501 3.04953 19.5027 3.14574 19.2719C3.24196 19.0411 3.38297 18.8314 3.56071 18.655L20.7378 1.55713C21.0961 1.20041 21.5822 1 22.089 1C22.5958 1 23.0819 1.20041 23.4403 1.55713C23.7987 1.91385 24 2.39768 24 2.90216C24 3.40664 23.7987 3.89047 23.4403 4.24719L7.61068 20Z" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_d_844_160" x="2.7" y="18.7" width="48.6" height="9.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="3" />
                            <feGaussianBlur stdDeviation="1.65" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_844_160" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_844_160" result="shape" />
                        </filter>
                        <filter id="filter1_d_844_160" x="0.7" y="0.7" width="27.6" height="44.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="3" />
                            <feGaussianBlur stdDeviation="1.65" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_844_160" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_844_160" result="shape" />
                        </filter>
                    </defs>
                </svg>


            </Link>

            <div className='relative h-[100dvh] flex flex-wrap'>
                <div className='md:h-[100dvh] h-[40%] w-full md:w-1/2 flex justify-center items-center bg-gradient-to-br from-red-900 to-red-600 clip2'>
                    {loading ? (
                        <div className='w-full h-auto aspect-square bg-gray-300 animate-pulse rotate-90'></div>
                    ) : (
                        <img
                            className='w-[100%] transform transition-transform duration-500 hover:scale-105'
                            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                            alt={hero.name || "Unknown Hero"}
                        />
                    )}
                </div>

                <div className='md:h-[100dvh] h-[60%] w-full md:w-1/2 flex justify-center md:px-10 py-4 px-6 overflow-y-scroll'>
                    <div className='text-left w-full max-w-md'>
                        {loading ? (
                            <>
                                <div className='text-xl font-bold animate-pulse bg-gray-300 h-8 w-40 mb-4'></div>
                                <div className='text-xl font-bold animate-pulse bg-gray-300 h-6 w-40 mb-6'></div>
                                {Array(6).fill(null).map((_, index) => (
                                    <div key={index} className='animate-pulse bg-gray-300 h-6 w-full mb-4'></div>
                                ))}
                            </>
                        ) : (
                            <div className='text-xl'>
                                <div className='mb-4'>
                                    <h2 className='font-bold text-3xl text-black'>NAME:</h2>
                                    <p className='text-[#2d2d2d]'>{hero.name || "Unknown Hero"}</p>
                                </div>

                                <div className='mb-6'>
                                    <h2 className='font-bold text-3xl text-black'>DESCRIPTION:</h2>
                                    <p className='text-[#2d2d2d]'>
                                        {hero.description ? hero.description : "No description available."}
                                    </p>
                                </div>

                                <div className='mb-6'>
                                    <h2 className='font-bold text-3xl text-black'>COMICS:</h2>
                                    {hero.comics.available > 0 ? (
                                        <ul className='list-disc pl-5'>
                                            {hero.comics.items.slice(0, 5).map((comic, index) => (
                                                <li key={index} className='text-[#2d2d2d]'>
                                                    {comic.name}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className='text-[#2d2d2d]'>No comics available.</p>
                                    )}
                                </div>

                                <div className='mb-6'>
                                    <h2 className='font-bold text-3xl text-black'>SERIES:</h2>
                                    {hero.series.available > 0 ? (
                                        <ul className='list-disc pl-5'>
                                            {hero.series.items.slice(0, 5).map((series, index) => (
                                                <li key={index} className='text-[#2d2d2d]'>
                                                    {series.name}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className='text-[#2d2d2d]'>No series available.</p>
                                    )}
                                </div>

                                <div className='mb-6'>
                                    <h2 className='font-bold text-3xl text-black'>STORIES:</h2>
                                    {hero.stories.available > 0 ? (
                                        <ul className='list-disc pl-5'>
                                            {hero.stories.items.slice(0, 5).map((story, index) => (
                                                <li key={index} className='text-[#2d2d2d]'>
                                                    {story.name}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className='text-[#2d2d2d]'>No stories available.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default FullPage;
