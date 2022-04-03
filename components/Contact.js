import {LogoGithub, ChatbubbleOutline, MailOutline, NewspaperOutline, LogoInstagram} from 'react-ionicons'

export default function Contact(){
    return (
        <div className="main_wrapper">
            <div className='footer_txt'>
                <p>
                    
                </p>
            </div>
            <div className='footer-wrapper'>
                <div className='animation-wrapper'>
                    <div className="footer">
                        <div className='waves'>
                            <div className='wave' id="wave1"></div>
                            <div className='wave' id="wave2"></div>
                            <div className='wave' id="wave3"></div>
                            <div className='wave' id="wave4"></div>
                        </div>
                        <ul className="social_icon">
                            <li>
                                <a href="https://github.com/Bigone0617" target="_blank" rel="noopener noreferrer">
                                    <LogoGithub 
                                        color='#f4f4f4'
                                        height="40px"
                                        width="40px"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://open.kakao.com/o/saGPJU8d" target="_blank" rel="noopener noreferrer">
                                    <ChatbubbleOutline color='#f4f4f4'
                                        height="40px"
                                        width="40px"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:xodlfsha@naver.com">
                                    <MailOutline color='#f4f4f4'
                                        height="40px"
                                        width="40px"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://daily-life-of-bigone.tistory.com/" target="_blank" rel="noopener noreferrer">
                                    <NewspaperOutline color='#f4f4f4'
                                        height="40px"
                                        width="40px"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/taeilkim_/" target="_blank" rel="noopener noreferrer">
                                    <LogoInstagram color='#f4f4f4'
                                        height="40px"
                                        width="40px"/>
                                </a>
                            </li>
                        </ul>
                        <p>@2022 TAEIL KIM | ALL Right Reserved</p>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .main_wrapper{
                    display: grid;
                    height: 100%;
                    min-heght: 100vh;
                }
                .footer_txt{
                    height: 50%;
                    font-size: 200px;
                }

                .footer-wrapper{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                }

                .animation-wrapper{
                    width: 100%;
                }

                .footer{
                    position: relative;
                    width: 100%;
                    height: 300px;
                    background: #3586ff;
                    min-height: 100px;
                    padding: 20px 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .footer .social_icon{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 10px 0;
                    flex-wrap: wrap;
                }

                .footer .social_icon li{
                    list-style: none;
                }

                .footer .social_icon li a{
                    margin: 0 10px;
                    display: inline-block;
                    transition: 0.5s;
                }
                .footer .social_icon li a:hover{
                    transform : translateY(-10px);
                }

                .footer .social_icon li a:hover::after{
                    position: absolute;
                    top: 40px;
                    left: 0;
                    font-size: 30px;
                    color: #f4f4f4;
                }

                .footer .social_icon li:nth-child(1) a:hover::after{
                    content: 'Github';
                }
                .footer .social_icon li:nth-child(2) a:hover::after{
                    content: 'KakaoTalk';
                }
                .footer .social_icon li:nth-child(3) a:hover::after{
                    content: 'Mail';
                }
                .footer .social_icon li:nth-child(4) a:hover::after{
                    content: 'Blog';
                }
                .footer .social_icon li:nth-child(5) a:hover::after{
                    content: 'Instagram';
                }

                .footer p{
                    font-size: 25px;
                    text-align: center;
                    margin-top: 15px;
                    margin-bottom: 10px;
                }

                .wave{
                    position: absolute;
                    top: -100px;
                    left: 0;
                    width: 100%;
                    height: 100px;
                    background:url(/img/wave.png);
                    background-size: 1000px 100px;
                }

                .wave#wave1{
                    z-index: 1000;
                    opacity: 1;
                    bottom: 0;
                    animation: animateWave 4s linear infinite;
                }

                .wave#wave2{
                    z-index: 999;
                    opacity: 0.5;
                    bottom: 10px;
                    animation: animateWave_02 4s linear infinite;
                }

                .wave#wave3{
                    z-index: 1000;
                    opacity: 0.2;
                    bottom: 15px;
                    animation: animateWave 3s linear infinite;
                }

                .wave#wave4{
                    z-index: 999;
                    opacity: 0.7;
                    bottom: 20px;
                    animation: animateWave 3s linear infinite;
                }

                @keyframes animateWave{
                    0%{
                        background-position-x:1000px;
                    }
                    100%{
                        background-position-x:0px;
                    }
                }

                @keyframes animateWave_02{
                    0%{
                        background-position-x:0px;
                    }
                    100%{
                        background-position-x:1000px;
                    }
                }
            `}</style>
        </div>
    )
}