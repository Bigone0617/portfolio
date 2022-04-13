import styled from "styled-components";
import { CafeOutline, WaterOutline, GlobeOutline, ChatbubblesOutline, BarChartOutline, FolderOpenSharp, SearchOutline, LogoGithub, PlayOutline } from 'react-ionicons'
import Detail from "./Detail";
import {useState} from "react";


const StyleServiceBox = styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.5s;
    transition-delay: 0s;
    color: ${props=> (props.txt_color ? props.txt_color : "#f4f4f4")};

    &&:after{
        width: 100%;
        height: 100%;
        content: "";
        background: url(${props => props.img});
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
    }

    :hover::after{
        opacity: 0.7;
    }
    

    :hover .content{
        transform: scale(1);
        transition-delay: 0.25s;
    }

    :hover .icon{
        top: 30px;
        left: calc(50% - 40px);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        transition-delay: 0s;
    }

    :hover .icon svg{
        width: 50px;
        height: 50px;
        transition-delay: 0s;
    }

    .content svg{
        margin-left:10px;
    }

    .content svg:hover{
        cursor: pointer;
    }
`

const StyleIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 2;
    transition-delay: 0.25s;

    svg{
        transition: 0.5s;
        transition-delay: 0.25s;
    }
`;



export default function Projects(){
    const [project_name, setProject_name] = useState();

    // 프로젝트 리스트 - 자세히보기 toggle
    function toggle_detail(name, toggle){
        let view_detail = document.getElementsByClassName('view_detail')[0];
        let container = document.getElementsByClassName('container')[0];
        setProject_name(name);
        
        if(toggle == 'detail'){
            container.style.transform = 'scale(0)';
            container.style.transition = '0.5s';
            container.style.display = 'none';
            view_detail.style.display = 'block';
            view_detail.style.transform = 'scale(1)';
            view_detail.style.transition = '0.5s';
    
        }else{
            container.style.display = 'flex';
            container.style.transform = 'scale(1)';
            view_detail.style.transform = 'scale(0)';
            view_detail.style.display = 'none';
        }
    }

    return(
        <div className="project-wrapper">
            <div className="container">
                <StyleServiceBox className="serviceBox" img="/img/cafe01.jpg">
                    <StyleIcon className="icon" color="#76e1c4">
                        <CafeOutline
                            color='#f4f4f4'
                            height="100px"
                            width="100px"
                        />
                    </StyleIcon>
                    <div className="content">
                        <h2>카페 창업 정보 공유 사이트</h2>
                        {/* <p>
                            카페 창업을 준비하는 사람들을 위한 사이트입니다.
                            <br></br><br></br>
                            SKILLS: HTML5, CSS3, JS, Bootstrap, nodejs
                        </p> */}
                        <SearchOutline
                            color="#f4f4f4"
                            height="30px"
                            width="30px"
                            onClick={() => toggle_detail('cafe', 'detail')}
                        />
                    </div>
                </StyleServiceBox>
                <StyleServiceBox className="serviceBox" img="/img/lop01.jpg" txt_color="#1d1d1d">
                    <StyleIcon className="icon" color="#f27e7e">
                        <GlobeOutline
                            color='#f4f4f4'
                            height="100px"
                            width="100px"
                        />
                    </StyleIcon>
                    <div className="content">
                        <h2>앱 프로젝트 소개 사이트</h2>
                        {/* <p>
                            개인프로젝트로 만든 앱을 소개하는 원페이지 웹사이트입니다.
                            <br></br>
                            SKILLS: HTML5, CSS3, JS, Bootstrap, AWS
                        </p> */}
                        <SearchOutline
                            color="#1d1d1d"
                            height="30px"
                            width="30px"
                            onClick={() => toggle_detail('lop', 'detail')}
                        />
                    </div>
                </StyleServiceBox>
                <StyleServiceBox className="serviceBox" img="/img/water02.jpg" txt_color="#f4f4f4">
                    <StyleIcon className="icon" color="#37b6e0">
                        <WaterOutline
                            color='#f4f4f4'
                            height="100px"
                            width="100px"
                        />
                    </StyleIcon>
                    <div className="content">
                        <h2>WaterFull</h2>
                        {/* <p>
                            I.O.T를 이용하여 실시간 수분 섭취량을 측정하여 기록하고, 알림을 보냅니다.
                            <br></br>
                            SKILLS: HTML5, CSS3, JS, firebase, java, aduino
                        </p> */}
                        <SearchOutline
                            color="#f4f4f4"
                            height="30px"
                            width="30px"
                            onClick={() => toggle_detail('water', 'detail')}
                        />
                    </div>
                </StyleServiceBox>
                <StyleServiceBox className="serviceBox" img="/img/amond01.jpg" txt_color="#1d1d1d">
                    <StyleIcon className="icon" color="#d356e5">
                        <ChatbubblesOutline
                            color='#f4f4f4'
                            height="100px"
                            width="100px"
                        />
                    </StyleIcon>
                    <div className="content">
                        <h2>아몬드톡</h2>
                        {/* <p>
                            웹기반 실시간 채팅 어플리케이션입니다.
                            <br></br><br></br>
                            SKILLS: React, nodejs, Heroku, netlify
                        </p> */}
                        <SearchOutline
                            color="#1d1d1d"
                            height="30px"
                            width="30px"
                            onClick={() => toggle_detail('amond', 'detail')}
                        />
                        <LogoGithub
                            color="#1d1d1d"
                            height="30px"
                            width="30px"
                            onClick={() => window.open('https://github.com/Bigone0617/amondTalk', '_blank')}
                        />
                        <PlayOutline
                            color="#1d1d1d"
                            height="30px"
                            width="30px"
                            onClick={() => window.open('https://amond-talk.netlify.app/', '_blank')}
                        />
                    </div>
                </StyleServiceBox>
                <StyleServiceBox className="serviceBox" img="/img/ubit01.jpg" txt_color="#1d1d1d">
                    <StyleIcon className="icon" color="#4c56d8">
                        <BarChartOutline
                            color='#f4f4f4'
                            height="100px"
                            width="100px"
                        />
                    </StyleIcon>
                    <div className="content">
                        <h2>Ubit</h2>
                        {/* <p>
                            거래소별 실시간 시세 및 자산현황 조회
                            <br></br><br></br>
                            SKILLS: Next.js, Chart.js, vercel
                        </p> */}
                        <SearchOutline
                            color="#1d1d1d"
                            height="30px"
                            width="30px"
                            onClick={() => toggle_detail('ubit', 'detail')}
                        />
                        <LogoGithub
                            color="#1d1d1d"
                            height="30px"
                            width="30px"
                            onClick={() => window.open('https://github.com/Bigone0617/coins-price-cloud', '_blank')}
                        />
                        <PlayOutline
                            color="#1d1d1d"
                            height="30px"
                            width="30px"
                            onClick={() => window.open('https://ubit.vercel.app/', '_blank')}
                        />
                    </div>
                </StyleServiceBox>
                <StyleServiceBox className="serviceBox" img="/img/port01.jpg">
                    <StyleIcon className="icon" color="#923ee1">
                        <FolderOpenSharp
                            color='#f4f4f4'
                            height="100px"
                            width="100px"
                        />
                    </StyleIcon>
                    <div className="content">
                        <h2>포트폴리오</h2>
                        {/* <p>
                            개인 포트폴리오 사이트
                            <br></br><br></br>
                            SKILLS: Next.js, vercel
                        </p> */}
                        <SearchOutline
                            color="#f4f4f4"
                            height="30px"
                            width="30px"
                            onClick={() => toggle_detail('port', 'detail')}
                        />
                        <LogoGithub
                            color="#f4f4f4"
                            height="30px"
                            width="30px"
                            onClick={() => window.open('https://github.com/Bigone0617/portfolio', '_blank')}
                        />
                        <PlayOutline
                            color="#f4f4f4"
                            height="30px"
                            width="30px"
                            onClick={() => window.open('https://taeilkim.vercel.app', '_blank')}
                        />
                    </div>
                </StyleServiceBox>
            </div>
            <div className="view_detail">
                <div className="button_wrapper">
                    <button onClick={() => toggle_detail('all', 'project')}>
                        X
                    </button>
                </div>
                <Detail project_name={project_name}/>
            </div>
            <style jsx>{`
                .project-wrapper{
                    display: flex;
                    padding: 0;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    width: 100%;
                }

                .container{
                    width: 2000px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 30px;
                    flex-wrap: wrap;
                    z-index:1;
                    margin: 0;
                    padding: 0;
                }

                .content{
                    position: relative;
                    padding: 20px;
                    color: '#f4f4f4';
                    text-align: center;
                    margin-top: 100px;
                    z-index: 1;
                    transform: scale(0);
                    transition: 0.5s;
                    transition-delay: 0s;
                }

                .content h2{
                    margin-top: 10px;
                    font-size: 30px;
                    margin-bottom: 5px;
                }

                .content p{
                    font-weight: 600;
                    font-size: 50px;
                    line-height: 1.5em;
                }

                .view_detail{
                    transform : scale(0);
                    z-index: 0;
                    width: 1100px;
                    height: 1100px;
                    justify-content: center;
                    align-items: center;
                    background: #1D1D1A;
                    display: none;
                    overflow: hidden;
                }

                .view_detail .button_wrapper button{
                    color: #f4f4f4;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    width: 50px;
                    height: 50px;
                    font-size: 40px;
                    font-weight: 600;
                }
            `}</style>
        </div>
        
    )
}