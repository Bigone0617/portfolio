import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "./project_m.module.css";
import SwiperCore, {EffectCoverflow, Pagination, Navigation}from 'swiper/core';

SwiperCore.use(EffectCoverflow, Pagination, Navigation)

export default function Projects_m(){
    return (
        <div className="main_wrapper">
            <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
                className="project_swiper"
            >
                <SwiperSlide>
                    <img src="/img/cafe02.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/site02.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/water02.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/amond02.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/ubit02.jpg"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/port02.jpg"></img>
                </SwiperSlide>
            </Swiper>
            <style jsx>{`
                main_wrapper{
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
}