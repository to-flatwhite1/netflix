import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../app/globals.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function UpcomingSwiper() {
    const [section, setSection] = useState([]); // 초기값을 빈 배열로 설정

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_SLIDE_API_KEY}&language=ko-KR&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                setSection(data.results); // API에서 가져온 데이터를 상태에 저장
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                /*                 pagination={{
                    clickable: true,
                }} */
                modules={[Pagination]}
                className="h-[18rem] "
                style={{
                    width: '100%',
                }}
            >
                {Array.isArray(section) && section.length > 0 ? (
                    section.map(({ id, poster_path, title, release_date, vote_average }, index) => (
                        <SwiperSlide key={id} /* className="w-[400px] sm:w-[300px] md:w-[350px]" */>
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                                alt={`Slide ${title}`}
                                width={500}
                                height={234}
                                className="object-cover object-center rounded-2xl h-[13rem] relative"
                            />
                            <span className="absolute bottom-24 left-2 text-white text-4xl font-bold z-10 italic">
                                {index + 1} {/* 배열의 인덱스 번호를 1부터 시작하도록 +1 */}
                            </span>
                            <div className="font-bold text-white mt-2">
                                {/* movieDesc */}
                                <span>{release_date}</span>
                            </div>
                            <div className=" text-white font-bold z-20 truncate">{title}</div>
                            <div className=" text-white font-bold z-20">⭐{vote_average.toFixed(1)}</div>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>No movies available</SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
