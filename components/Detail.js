export default function Detail({project_name}){
    const prj_name = project_name ? project_name : "all";
    const projcets = {
        all:{
            name: "",
            exp: "",
            pic: []
        },
        cafe: {
            name : "카페 창업 정보 공유 사이트",
            exp:"카페 창업을 하고자 하는 사람들을 위해, 창업 절차 및 비용, 머신, 원두 등에 정보를 제공하는 사이트입니다.",
            pic: ["/img/cafe02.jpg","/img/cafe03.jpg","/img/cafe04.jpg","/img/cafe05.jpg","/img/cafe06.jpg","/img/cafe07.jpg"],
            skills: "HTML5, CSS3, JS, Bootstrap, nodejs"
        },
        lop: {
            name : "앱 프로젝트 소개 사이트",
            exp:"개인 프로젝트로 만든 앱을 소개하는 웹사이트입니다.",
            pic: ["/img/lop02.jpg","/img/lop03.jpg"],
            skills: "HTML5, CSS3, JS, Bootstrap, AWS"
        },
        water: {
            name : "WaterFull",
            exp:"I.O.T를 이용하여 실시간 수분 섭취량을 측정하여 기록하고, 알림을 보내는 어플과 웹 사이트입니다.",
            pic: ["/img/water03.jpg","/img/water04.jpg","/img/water05.jpg","/img/water06.jpg","/img/water07.jpg"],
            skills: "HTML5, CSS3, JS, firebase, java, aduino"
        },
        amond: {
            name : "아몬드톡",
            exp:"웹기반 실시간 채팅 어플리케이션입니다.",
            pic: ["/img/amond02.jpg","/img/amond03.jpg","/img/amond04.jpg","/img/amond05.jpg","/img/amond06.jpg","/img/amond08.jpg","/img/amond09.jpg","/img/amond10.jpg"],
            skills: "React, nodejs, Heroku, netlify"
        },
        ubit: {
            name : "Ubit",
            exp:"암호화폐 거래소 API를 이용하여 거래소별 실시간 시세 및 자산현황 조회를 할 수 있는 사이트입니다.",
            pic: ["/img/ubit02.jpg","/img/ubit03.jpg","/img/ubit04.jpg","/img/ubit05.jpg","/img/ubit06.jpg","/img/ubit07.jpg"],
            skills: "Next.js, Chart.js, vercel"
        },
        port: {
            name : "포트폴리오 사이트",
            exp:"저를 소개하고, 제가 지금까지 만들었던 프로젝트를 설명하는 사이트입니다.",
            pic: [],
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
                {projcets[prj_name].exp}
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
            <div className="project_skills">
                SKILLS: {projcets[prj_name].skills}
            </div>
            <style jsx>{`
                .project_name{
                    font-size: 80px;
                }

                .project_exp{
                    font-size: 50px;
                }

                .project_pic{
                }

                .project_pic section{
                    position: relative;
                    width: 100%;
                    height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
                    border: 4px solid #fff;
                    border-radius: 4px;
                }

                .project_skills{
                    margin-top: 180px;
                    font-size: 40px;
                }
            `}</style>
        </div>
    )
}