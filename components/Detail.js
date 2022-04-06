export default function Detail({project_name}){
    const prj_name = project_name ? project_name : "all";
    const projcets = {
        all:{
            name: "",
            exp: "",
            skill_exp:"",
            pic: []
        },
        cafe: {
            name : "카페 창업 정보 공유 사이트",
            exp:"카페 창업을 하고자 하는 사람들을 위해, 창업 절차 및 비용, 머신, 원두 등에 정보를 제공하는 사이트입니다.",
            skill_exp:"Bootstrap을 이용하여 템플릿 활용법을 익혔고, nodejs로 간단한 서버 구축하는 방법을 알게 되었습니다.",
            pic: ["/img/cafe02.jpg","/img/cafe03.jpg","/img/cafe04.jpg","/img/cafe05.jpg","/img/cafe06.jpg","/img/cafe07.jpg"],
            skills: "HTML5, CSS3, JS, Bootstrap, nodejs"
        },
        lop: {
            name : "앱 프로젝트 소개 사이트",
            exp:"개인 프로젝트로 만든 앱을 소개하는 웹사이트입니다.",
            skill_exp:"원페이지 사이트를 제작 하는 방법을 공부하게 되었고, 많은 삽질을 통해 AWS EC2에 배포하는 방법을 알게 되었습니다.",
            pic: ["/img/lop02.jpg","/img/lop03.jpg"],
            skills: "HTML5, CSS3, JS, Bootstrap, AWS"
        },
        water: {
            name : "WaterFull",
            exp:"I.O.T를 이용하여 실시간 수분 섭취량을 측정하여 기록하고, 알림을 보내는 어플과 웹 사이트입니다.",
            skill_exp:"자바를 이용해 앱 개발을 하고, 아두이노와의 블루투스 통신으로 받은 데이터를 firebase에 실시간으로 저장하고 불러오는 프로젝트였습니다. 그리고 모든 사용자의 데이터를 평균내어 나타내는 간단한 웹사이트를 제작했습니다.",
            pic: ["/img/water03.jpg","/img/water04.jpg","/img/water05.jpg","/img/water06.jpg","/img/water07.jpg"],
            skills: "HTML5, CSS3, JS, firebase, java, aduino"
        },
        amond: {
            name : "아몬드톡",
            exp:"웹기반 실시간 채팅 어플리케이션입니다.",
            skill_exp:"프론트 엔드는 React 기반으로 제작하였고, 백엔드는 nodejs로 REST API 형태의 서버를 제작했습니다. 그리고 프론트 엔드는 netlify를 통해 배포하고 백엔드는 Heroku를 통해서 배포했습니다.",
            pic: ["/img/amond02.jpg","/img/amond03.jpg","/img/amond04.jpg","/img/amond05.jpg","/img/amond06.jpg","/img/amond08.jpg","/img/amond09.jpg","/img/amond10.jpg"],
            skills: "React, nodejs, Heroku, netlify"
        },
        ubit: {
            name : "Ubit",
            exp:"암호화폐 거래소 API를 이용하여 거래소별 실시간 시세 및 자산현황 조회를 할 수 있는 사이트입니다.",
            skill_exp:"업비트, 빗썸, 코빗, 바이낸스의 Open API를 통해서 실시간 시세를 조회해오고, open api key를 입력한 사용자에게는 자신의 실시간 자산 현황까지 보여주는 사이트를 제작했습니다.",
            pic: ["/img/ubit02.jpg","/img/ubit03.jpg","/img/ubit04.jpg","/img/ubit05.jpg","/img/ubit06.jpg","/img/ubit07.jpg"],
            skills: "Next.js, Chart.js, vercel"
        },
        port: {
            name : "포트폴리오 사이트",
            exp:"저를 소개하고, 제가 지금까지 만들었던 프로젝트를 설명하는 사이트입니다.",
            skill_exp:"Nextjs 기반으로 저를 소개하는 원페이지 스크롤 페이지를 제작했습니다. 배포는 vercel을 통해서 배포했습니다. CSS animation 관련 부분에 대해서 많은 공부가 되었습니다.",
            pic: ["/img/port02.jpg","/img/port03.jpg","/img/port04.jpg","/img/port05.jpg"],
            skills: "Next.js, vercel"
        },
    }

    const click_nav = function(anything){
        document.getElementById('slider').src = anything;
    }

    return (
        <div>
            <div className="project_name">
                {projcets[prj_name].name}
            </div>
            <div className="project_exp">
                <p><b>프로젝트 설명 : </b>{projcets[prj_name].exp}</p>
            </div>
            <div className="project_skill_exp">
                <p><b>느낀점 및 부가 설명 : </b>{projcets[prj_name].skill_exp}</p>
            </div>
            <div className="project_skills">
                <b>SKILLS: </b>{projcets[prj_name].skills}
            </div>
            <div className="project_pic">
                <section>
                    <img src={projcets[prj_name].pic?.[0]} id="slider"></img>
                    <ul className="navigation">
                        {
                            projcets[prj_name].pic?.map((pic, idx) => (
                                <li key={idx} onClick = {()=>click_nav(pic)}>
                                    <img src={pic}></img>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>
            <style jsx>{`
                .project_name{
                    font-size: 60px;
                }

                .project_exp{
                    font-size: 25px;
                    margin-bottom: 10px;
                    width: 70%
                }

                .project_skill_exp{
                    font-size: 25px;
                    margin-bottom: 10px;
                    width: 70%;
                    white-space: normal;
                }

                .project_pic{
                    margin-top: 20px;
                }

                .project_pic section{
                    position: relative;
                    width: 100%;
                    height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .project_pic section img{
                    object-fit: contain
                }

                .project_pic section #slider{
                    position: absolute;
                    top: 0;
                    height: 370px;
                    width: 800px;
                    left: 20%;
                    border-radius: 5px;
                }

                .project_pic section .navigation{
                    position: absolute;
                    bottom: -200px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 100;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .project_pic section .navigation li {
                    list-style: none;
                    cursor: pointer;
                    margin: 10px;
                }
                .project_pic section .navigation li img{
                    width: 150px;
                    height: 80px;
                    border: 1px solid #fff;
                    border-radius: 4px;
                }

                .project_skills{
                    font-size: 30px;
                }
            `}</style>
        </div>
    )
}