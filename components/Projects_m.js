import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from "./Projects_m.module.css";
import SwiperCore, {EffectCoverflow, Pagination, Navigation}from 'swiper/core';

SwiperCore.use(EffectCoverflow, Pagination, Navigation)

export default function Projects_m(){
    return (
        <div className={styles.main_wrapper}>
            <Swiper
                // navigation={true}
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
                className={styles.project_swiper}
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.contents}>
                        <div className={styles.project_name}>
                            <h2>카페 창업 정보 공유 사이트</h2>
                        </div>
                        <div className={styles.project_exp}>
                            <p><b>프로젝트 설명 : </b>"카페 창업을 하고자 하는 사람들을 위해, 창업 절차 및 비용, 머신, 원두 등에 정보를 제공하는 사이트입니다."</p>
                        </div>
                        <div className= {styles.project_skill_exp}>
                            <p><b>느낀점 및 부가 설명 : </b>"Bootstrap을 이용하여 템플릿 활용법을 익혔고, nodejs로 간단한 서버 구축하는 방법을 알게 되었습니다."</p>
                        </div>
                        <div className={styles.project_skills}>
                            <b>SKILLS: </b>"HTML5, CSS3, JS, Bootstrap, nodejs"
                        </div>
                        <div className={styles.project_img}>
                            <img src='/img/cafe01.jpg'></img>
                        </div>
                    </div>
                    {/* <img src="/img/cafe02.jpg"></img> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.contents}>
                        22
                    </div>
                    {/* <img src="/img/site02.jpg"></img> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.contents}>
                        33
                    </div>
                    {/* <img src="/img/water02.jpg"></img> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.contents}>
                        44
                    </div>
                    {/* <img src="/img/amond02.jpg"></img> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.contents}>
                        5
                    </div>
                    {/* <img src="/img/ubit02.jpg"></img> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.contents}>
                        6
                    </div>
                    {/* <img src="/img/port02.jpg"></img> */}
                </SwiperSlide>
            </Swiper>
            {/* <style jsx>{`
                main_wrapper{
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
            `}</style> */}
        </div>
    )
}