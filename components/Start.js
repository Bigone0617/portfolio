import {RefreshOutline, ArrowDownOutline} from 'react-ionicons'

export default function Start(){

    // 타이핑 애니메이션 끝나면 '다시보기' 글씨 나오게 하기
    const animation_end = () => {
        const dynamic_txts = document.getElementsByClassName('dynamic-txts')[0];
        const restart = document.getElementsByClassName('restart')[0];
        const scroll = document.getElementsByClassName('scroll')[0];

        dynamic_txts.addEventListener('animationend', () =>{
            dynamic_txts.style.display = 'none';
            restart.style.transform = 'scale(1)';
            restart.style.transition = '0.5s';
            scroll.style.transform = 'scale(1)';
            scroll.style.transition = '0.5s';
        });
    }

    // '다시보기' 누르면 타이핑 애니메이션 다시 실행하기
    function restart_animation() {
        const dynamic_txts = document.getElementsByClassName('dynamic-txts')[0];
        const restart = document.getElementsByClassName('restart')[0];
        const scroll = document.getElementsByClassName('scroll')[0];

        restart.style.transform = 'scale(0)';
        scroll.style.transform = 'scale(0)';
        dynamic_txts.style.display = 'block';

        dynamic_txts.style.animationPlayState = 'running';
    }

    function media_size(){
        const restart_svg = document.getElementsByClassName('restart')[0].childNodes[1].childNodes[0];
        const scroll_svg = document.getElementsByClassName('scroll')[0].childNodes[1].childNodes[0];
        if(window.innerWidth <= 768){
            restart_svg.style.width = '20px';
            restart_svg.style.height = '20px';

            scroll_svg.style.width = '20px';
            scroll_svg.style.height = '20px';
        }else{
            restart_svg.style.width = '40px';
            restart_svg.style.height = '40px';

            scroll_svg.style.width = '40px';
            scroll_svg.style.height = '40px';
        }
    }

    // client side에서 렌더링 할때 실행하기 위해서
    if(typeof window === 'object'){
        animation_end();
        media_size();
    }


    return(
        <div className="main-wrapper">
            <section>
                <ul className="dynamic-txts">
                    <li><span>안녕하세요!</span></li>
                    <li><span>사용자의 편의를</span></li>
                    <li><span>먼저 생각하는</span></li>
                    <li><span>프론트엔드 개발자</span></li>
                    <li><span>김태일입니다.</span></li>
                </ul>
                <div className="restart" onClick={() => restart_animation()}>
                    다시보기
                    <RefreshOutline
                        color='#f4f4f4'
                        height="40px"
                        width="40px"
                    />
                </div>
                <div className='scroll'>
                    스크롤
                    <ArrowDownOutline
                        color='#f4f4f4'
                        height="40px"
                        width="40px"
                    />
                </div>
                <div className='star star1'></div>
                <div className='star star2'></div>
                <div className='star star3'></div>
                <div className='star star4'></div>
                <div className='star star5'></div>
                <div className='star star6'></div>
                <div className='star star7'></div>
                <div className='star star8'></div>
            </section>
            <style jsx>{`
                section{
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .dynamic-txts {
                    position: absolute;
                    height: 90px;
                    line-height: 90px;
                    overflow: hidden;
                  }
  
                .dynamic-txts li{
                    list-style: none;
                    font-size: 85px;
                    position: relative;
                    top:0;
                    animation: slide 10s steps(5) forwards;
                }
  
                @keyframes slide{
                    100%{
                        top: -450px;
                    }
                }
  
                .dynamic-txts li span{
                    position: relative
                }
                  
                .dynamic-txts li span::after{
                    content:"";
                    position:absolute;
                    left:0;
                    height: 100%;
                    width: 100%;
                    border-left: 2px solid #f4f4f4;
                    background: #1D1D1D;
                    animation: typing 2s steps(10) infinite;
                }
  
                @keyframes typing{
                    100%{
                        left: 100%;
                        margin: 0 -35px 0 35px;
                    }
                }

                .restart{
                    transform : scale(0);
                    width: 200px;
                    height: 60px;
                    font-size: 40px;
                }

                .restart:hover{
                    cursor: pointer;
                }

                .scroll{
                    transform : scale(0);
                    width: 150px;
                    font-size: 40px;
                    position: absolute;
                    top: 85%;
                    text-align:center
                }


                section .star{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    animation: animate 8s ease-in-out infinite,
                               backgroundmove 16s linear infinite;
                }

                .star{
                    pointer-events: none;
                }

                section .star.star1{
                    animation-delay: 0s;
                    background: url(/img/star1.png)
                }
                section .star.star2{
                    animation-delay: -1s;
                    background: url(/img/star2.png)
                }
                section .star.star3{
                    animation-delay: -2s;
                    background: url(/img/star3.png)
                }
                section .star.star4{
                    animation-delay: -3s;
                    background: url(/img/star4.png)
                }
                section .star.star5{
                    animation-delay: -4s;
                    background: url(/img/star5.png)
                }
                section .star.star6{
                    animation-delay: -5s;
                    background: url(/img/star6.png)
                }
                section .star.star7{
                    animation-delay: -6s;
                    background: url(/img/star7.png)
                }
                section .star.star8{
                    animation-delay: 10s;
                    background: url(/img/star8.png)
                }

                @keyframes animate{
                    0%,20%,40%,60%,80%,100%{
                        opacity: 0;
                    }

                    10%,30%,50%,70%,90%{
                        opacity: 0.7;
                    }
                }

                @keyframes backgroundmove{
                    0%{
                        transform: scale(1);
                    }
                    100%{
                        transform: scale(2);
                    }
                }

                @media screen and (max-width: 768px) {
                    .dynamic-txts {
                        position: absolute;
                        height: 40px;
                        line-height: 40px;
                        overflow: hidden;
                      }
      
                    .dynamic-txts li{
                        list-style: none;
                        font-size: 35px;
                        position: relative;
                        top:0;
                        animation: slide 10s steps(5) forwards;
                    }
      
                    @keyframes slide{
                        100%{
                            top: -200px;
                        }
                    }
      
                    .dynamic-txts li span{
                        position: relative
                    }
                      
                    .dynamic-txts li span::after{
                        content:"";
                        position:absolute;
                        left:0;
                        height: 100%;
                        width: 100%;
                        border-left: 2px solid #f4f4f4;
                        background: #1D1D1D;
                        animation: typing 2s steps(10) infinite;
                    }
      
                    @keyframes typing{
                        100%{
                            left: 100%;
                            margin: 0 -35px 0 35px;
                        }
                    }

                    .restart{
                        transform : scale(0);
                        width: 100px;
                        height: 30px;
                        font-size: 20px;
                    }

                    .scroll{
                        transform : scale(0);
                        width: 70px;
                        font-size: 20px;
                        position: absolute;
                        top: 85%;
                        text-align:center
                    }
                }
            `}</style>
        </div>
    )
}