import AccordionComponent from '@/components/accordion/Accordion';
import Footer from '@/components/layout/footer/Footer';
import { Header } from '@/components/layout/header/Header';
import Section from '@/components/section/Section';
import SlideSwiper from '@/components/swiper/Swiper';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <Header />
            <SlideSwiper />
            <Section />/
            <AccordionComponent />
            <Footer />
        </>
    );
};

export default HomePage;
