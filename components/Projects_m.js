import { Swiper, SwiperSlide } from "swiper/react"; // basic
import 'swiper/css';

export default function Projects_m(){
    function slide_style () {
        if(typeof window === 'object'){
            const swiper_wrapper = document.getElementsByClassName('swiper-wrapper')[0];
            swiper_wrapper.childNodes.forEach = Array.prototype.forEach;

            swiper_wrapper.childNodes.forEach((slide) => {
                slide.style.backgroundColor = "blue";
                slide.style.backgroundPosition = "center";
                slide.style.backgroundSize = "cover";
                slide.style.width = "300px";
                slide.style.height = "300px";
            })
        }
    }

    setInterval(slide_style, 5000);

    return (
        <div className="main_wrapper">
            <section>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        768: {
                        slidesPerView: 7,
                        },
                    }}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                </Swiper>
            </section>
            
            <style jsx>{`
                section{
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