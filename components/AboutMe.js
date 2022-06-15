import styled from "styled-components";

const AnimateSpan = styled.span`
    position: absolute;
    font-size: 5em;
    white-space: nowrap;
    font-family: 'Nanum Pen Script', cursive;
    text-transform: uppercase;
    font-weight: 900;
    padding: 0 10px;
    transform-style: preserve-3d;
    text-shadow: 0 5px 15px rgba(0.0.0.0.25);
    transform: translateX(-50%) rotateX(calc(36deg * ${props => props.number})) translateZ(100px);

    i {
        font-style: initial;
    }

    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`
const AnimateTitle = styled.button`
    font-size: 50px;
    display: flex;
    color: #f4f4f4;
    background-color: #1D1D1D;
    border: none;

    :hover {
        color: ${props => props.color};
        animation: jelly 0.8s;
    }

    @keyframes jelly{
        25%{
            transform: scale(0.8, 1.3);
        }
        50%{
            transform: scale(1.3, 0.8);
        }
        75%{
            transform: scale(0.7, 1.2);
        }
        100%{
            transform: scale(1.0, 1.0);
        }
    }

    @media screen and (max-width: 768px){
        font-size: 20px;
        padding: 1px;
    }
`

const Emphasis_txt = styled.span`
    color: ${props => props.color};
    font-weight: 500;
`

export default function AboutMe () {

    return (
        <div className="main_wrapper">
            <div className="text_wrapper">
                <div className="wrapper">
                    <span className="deco_txt1">&#60;h2&#62;</span>
                    <div className="phone_style">
                        <AnimateTitle className="title" color="#76e1c4">언</AnimateTitle>
                        <AnimateTitle className="title" color="#6adcd3">제</AnimateTitle>
                        <AnimateTitle className="title" color="#3fd1de">나</AnimateTitle> 
                        <AnimateTitle className="title">&nbsp; </AnimateTitle>   
                        <AnimateTitle className="title" color="#37b6e0">긍</AnimateTitle>
                        <AnimateTitle className="title" color="#449bd8">정</AnimateTitle>
                        <AnimateTitle className="title" color="#4278d9">적</AnimateTitle>
                        <AnimateTitle className="title" color="#4c56d8">인</AnimateTitle> 
                        <AnimateTitle className="title">&nbsp;   </AnimateTitle>    
                    </div> 
                    <div className="phone_style">
                        <AnimateTitle className="title" color="#513dcd">김</AnimateTitle>
                        <AnimateTitle className="title" color="#923ee1">태</AnimateTitle>
                        <AnimateTitle className="title" color="#d356e5">일</AnimateTitle>
                        <AnimateTitle className="title" color="#f660b5">입</AnimateTitle>
                        <AnimateTitle className="title" color="#f06387">니</AnimateTitle>
                        <AnimateTitle className="title" color="#f27e7e">다</AnimateTitle>
                        <AnimateTitle className="title" color="#f27e7e">!</AnimateTitle>
                    </div>
                    <span className="deco_txt2">&#60;&#47;h2&#62;</span>
                </div>

                <span className="deco_txt2">&#60;p&#62;</span>
                <p className="introduce">
                &nbsp;안녕하세요. 웹 프론트 엔드 2년차 개발자 <Emphasis_txt color="#F7F7F7">김태일</Emphasis_txt>입니다.<br></br><br></br>
                &nbsp;매개발시 사용자의 <Emphasis_txt color="#F7F7F7">편의</Emphasis_txt>와<Emphasis_txt color="#F7F7F7"> 가독성</Emphasis_txt>을 제일 중요시하며, 사용자 디바이스의 <Emphasis_txt color="#F7F7F7">최적화</Emphasis_txt>를 항상 고민합니다. 
                <br></br>
                &nbsp;팀개발시 팀원과의 <Emphasis_txt color="#F7F7F7">소통</Emphasis_txt>을 제일 우선시하며, 개발자뿐만 아니라 기획, QA 등 비개발 업무 담당자분들과의
                소통도 중요시합니다. 항상 화목한 분위기를 이끌어내어 좋은 성과를 이루었습니다.
                <br></br><br></br>
                &nbsp;프론트 엔드 최신 트렌드를 공부하는 것도 좋아하지만, 기존 언어의 기본을 깊이 공부하고 이해하려고 노력합니다.
                <br></br> 아무리 어려운 문제가 있어도 항상 <Emphasis_txt color="#F7F7F7">긍정적</Emphasis_txt>으로 생각하고, <Emphasis_txt color="#F7F7F7">적극적</Emphasis_txt>으로 해결합니다.
                </p>
                <span className="deco_txt2">&#60;&#47;p&#62;</span>
                <a href="/resume_taeil.pdf" download="resume_taeil.pdf">download</a>
            </div>
            <div className="animate_wrapper">
                <div className="box">
                    <AnimateSpan number={1}><i>JavaScript</i></AnimateSpan>
                    <AnimateSpan number={2}><i>React</i></AnimateSpan>
                    <AnimateSpan number={3}><i>NextJs</i></AnimateSpan>
                    <AnimateSpan number={4}><i>NODEJS</i></AnimateSpan>
                    <AnimateSpan number={5}><i>HTML</i></AnimateSpan>
                    <AnimateSpan number={6}><i>CSS</i></AnimateSpan>
                    <AnimateSpan number={7}><i>C#</i></AnimateSpan>
                    <AnimateSpan number={8}><i>MYSQL</i></AnimateSpan>
                    <AnimateSpan number={9}><i>ORACLE</i></AnimateSpan>
                    <AnimateSpan number={10}><i>JAVA</i></AnimateSpan>
                </div>
            </div>
            <style jsx>{`
                .main_wrapper{
                    display: flex;
                }

                .text_wrapper{
                    width: 70%;
                }

                .text_wrapper a{
                    display: flex;
                    width: 110px;
                    margin-top: 20px;
                    margin-left: 40px;
                    color: #f4f4f4; 
                    text-decoration-line : none;
                    font-size: 20px;
                    border: solid 1px #f4f4f4;
                    border-radius: 10px;
                    padding: 10px;
                    text-align:center
                }

                .text_wrapper a:hover{
                    background-color: #2F3F4F;
                }

                .text_wrapper a:hover::after{
                    content: "이력서 다운로드";
                    color: #f4f4f4;
                    position: absolute;
                    right: 0;
                    top: -37px;
                    font-size: 18px;
                    font-weight: 600;
                    background: #f4f4f4;
                    padding: 1px 8px;
                    border-radius: 3px;
                }

                .animate_wrapper{
                    font-family: 'Cute Font', cursive;
                    width: 30%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-heigth: 100vh;
                    overflow: hidden;
                }

                .box{
                    transform-style: preserve-3d;
                    animation: circle 25s linear infinite;
                }

                @keyframes circle {
                    0%{
                        transform: perspective(1000px) rotateX(0deg) rotate(25deg);
                    }
                    100%{
                        transform: perspective(1000px) rotateX(360deg) rotate(25deg);
                    }
                }

                .wrapper{
                    display: flex;
                    margin-top: 10%;
                    margin-bottom: 50px;
                    margin-left: 40px;
                }

                .deco_txt1{
                    font-size: 20px;
                    color: #2F3F4F;
                    display: flex;
                    margin-right: 40px;
                }

                .deco_txt2{
                    font-size: 20px;
                    color: #2F3F4F;
                    display: flex;
                    margin-left: 40px;
                }

                .introduce{
                    width: 80%;
                    color: #999999;
                    font-size: 25px;
                    margin-left: 40px;
                    white-space: normal;
                }

                .phone_style{
                    display: flex;
                }

                @media screen and (max-width: 768px) {
                    .wrapper{
                        display: inline-block;
                        margin-bottom: 5px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                    }

                    .deco_txt1{
                        font-size: 15px;
                    }

                    .phone_style{
                        display: flex;
                    }
                   
                    .deco_txt2{
                        font-size: 15px;
                        margin-left: 40px;
                    }

                    .wrapper > .deco_txt2:nth-of-type(2){
                        margin-left: 0px;
                    }

                    .text_wrapper a{
                        display: none;
                    }

                    .introduce{
                        font-size: 15px;
                    }

                    @keyframes circle {
                        0%{
                            transform: perspective(300px) rotateX(0deg) rotate(25deg);
                        }
                        100%{
                            transform: perspective(300px) rotateX(360deg) rotate(25deg);
                        }
                    }
                }
            `}</style>
        </div>
    )
}