import { LogoGithub, PlayOutline } from 'react-ionicons'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from "./Projects_m.module.css";
import SwiperCore, {EffectCoverflow, Navigation}from 'swiper/core';

SwiperCore.use(EffectCoverflow, Navigation)

export default function Projects_m(){
    const projcets = [
        {
            name : "카페 창업 정보 공유 사이트",
            exp:"카페 창업을 하고자 하는 사람들을 위해, 창업 절차 및 비용, 머신, 원두 등에 정보를 제공하는 사이트입니다.",
            skill_exp:"Bootstrap을 이용하여 템플릿 활용법을 익혔고, nodejs로 간단한 서버 구축하는 방법을 알게 되었습니다.",
            pic: "/img/cafe01.jpg",
            skills: "HTML5, CSS3, JS, Bootstrap, nodejs"
        },
        {
            name : "앱 프로젝트 소개 사이트",
            exp:"개인 프로젝트로 만든 앱을 소개하는 웹사이트입니다.",
            skill_exp:"원페이지 사이트를 제작 하는 방법을 공부하게 되었고, 많은 삽질을 통해 AWS EC2에 배포하는 방법을 알게 되었습니다.",
            pic: "/img/lop01.jpg",
            skills: "HTML5, CSS3, JS, Bootstrap, AWS"
        },
        {
            name : "WaterFull",
            exp:"I.O.T를 이용하여 실시간 수분 섭취량을 측정하여 기록하고, 알림을 보내는 어플과 웹 사이트입니다.",
            skill_exp:"자바를 이용해 앱 개발을 하고, 아두이노와의 블루투스 통신으로 받은 데이터를 firebase에 실시간으로 저장하고 불러오는 프로젝트였습니다. 그리고 모든 사용자의 데이터를 평균내어 나타내는 간단한 웹사이트를 제작했습니다.",
            pic: "/img/water01.jpg",
            skills: "HTML5, CSS3, JS, firebase, java, aduino"
        },
        {
            name : "아몬드톡",
            exp:"웹기반 실시간 채팅 어플리케이션입니다.",
            skill_exp:"프론트 엔드는 React 기반으로 제작하였고, 백엔드는 nodejs로 REST API 형태의 서버를 제작했습니다. 그리고 프론트 엔드는 netlify를 통해 배포하고 백엔드는 Heroku를 통해서 배포했습니다.",
            pic: "/img/amond01.jpg",
            skills: "React, nodejs, Heroku, netlify",
            git: "https://github.com/Bigone0617/amondTalk",
            play: "https://amond-talk.netlify.app/"
        },
        {
            name : "Ubit",
            exp:"암호화폐 거래소 API를 이용하여 거래소별 실시간 시세 및 자산현황 조회를 할 수 있는 사이트입니다.",
            skill_exp:"업비트, 빗썸, 코빗, 바이낸스의 Open API를 통해서 실시간 시세를 조회해오고, open api key를 입력한 사용자에게는 자신의 실시간 자산 현황까지 보여주는 사이트를 제작했습니다.",
            pic: "/img/ubit01.jpg",
            skills: "Next.js, Chart.js, vercel",
            git: "https://github.com/Bigone0617/coins-price-cloud",
            play: "https://ubit.vercel.app/"
        },
        {
            name : "포트폴리오 사이트",
            exp:"저를 소개하고, 제가 지금까지 만들었던 프로젝트를 설명하는 사이트입니다.",
            skill_exp:"Nextjs 기반으로 저를 소개하는 원페이지 스크롤 페이지를 제작했습니다. 배포는 vercel을 통해서 배포했습니다. CSS animation 관련 부분에 대해서 많은 공부가 되었습니다.",
            pic: "/img/port01.jpg",
            skills: "Next.js, vercel",
            git: "https://github.com/Bigone0617/portfolio",
            play: "https://taeilkim.vercel.app"
        },
    ]

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
                className={styles.project_swiper}
            >
                {
                    projcets.map((project, idx) => (
                            <SwiperSlide key ={idx} className={styles.swiper_slide}>
                                <div className={styles.contents}>
                                    <div className={styles.project_name}>
                                        <h2>{project.name}</h2>
                                    </div>
                                    <div className={styles.project_exp}>
                                        <p><b>프로젝트 설명 : </b>{project.exp}</p>
                                    </div>
                                    <div className= {styles.project_skill_exp}>
                                        <p><b>느낀점 및 부가 설명 : </b>{project.skill_exp}</p>
                                    </div>
                                    <div className={styles.project_skills}>
                                        <p><b>SKILLS: </b>{project.skills}</p>
                                    </div>
                                    <div className={styles.project_img}>
                                        <img src={project.pic}></img>
                                    </div>
                                    <div className={styles.buttons}>
                                        {
                                            project.git ? (
                                                <LogoGithub
                                                    color="#f4f4f4"
                                                    height="30px"
                                                    width="30px"
                                                    onClick={() => window.open(project.git, '_blank')}
                                                />
                                            ) : (<></>)
                                        }
                                        {
                                            project.play ? (
                                                <PlayOutline
                                                    color="#f4f4f4"
                                                    height="30px"
                                                    width="30px"
                                                    onClick={() => window.open(project.play, '_blank')}
                                                />
                                            ) : (<></>)
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    )
}