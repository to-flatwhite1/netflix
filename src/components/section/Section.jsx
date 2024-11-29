'use client';
import React from 'react';

import PopularSwiper from '../swiper/popular';
import UpcomingSwiper from '../swiper/betweenSwiper';
import NowPlayingSwiper from '../swiper/sectionSwiper';
import TopRatedSwiper from '../swiper/videoSwiper';
import MovieSwiper from '../swiper/movie';
import TrendingSwiper from '../swiper/TrendingMovie';

const Section = () => {
    return (
        <>
            <div className="w-11/12 mx-auto">
                <h1 className="text-lg text-white  font-bold my-5">무비차트 | 현재상영작</h1>
                <NowPlayingSwiper />
                <h1 className="text-lg text-white  font-bold my-5">무비차트 | 개봉예정작</h1>
                <UpcomingSwiper />
                <h1 className="text-lg text-white font-bold my-5">무비차트 | 인기상영작</h1>
                <PopularSwiper />
                <h1 className="text-lg text-white font-bold my-5">무비차트 | 최고 평점작</h1>
                <TopRatedSwiper />
                <h1 className="text-lg text-white font-bold my-5">무비차트 | 미국 이번주간 인기 상영작</h1>
                <MovieSwiper />
                <h1 className="text-lg text-white font-bold my-5">무비차트 | 상위 평가된 TV 프로그램</h1>
                <TrendingSwiper />
            </div>
        </>
    );
};

export default Section;
