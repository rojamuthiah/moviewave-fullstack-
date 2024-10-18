import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function NewMovieSlider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };

    const sliderRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += screenWidth - 110;
        }
    };

    const sliderLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= screenWidth - 110;
        }
    };

    return (
        <div className="relative bg-gray-800">
            <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
            />

            <div className="flex overflow-x-auto w-full px-18 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
                {movieList.map(item => (
                    <img
                        key={item.id} // Added key prop for optimization
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        alt={item.title} // Added alt attribute for accessibility
                        className="min-w-full md:h-[500px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
                    />
                ))}
            </div>

            <div className='font-extrabold text-white text-center decoration-8 font-extralight'>
                <h2>binge on every genre.....</h2>
            </div>


        </div>
    );
}

export default NewMovieSlider;
