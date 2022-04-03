import styled from "styled-components";

const StyledDiv = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;

    :hover span > .dynamic-txts{
      display: block;
    }

    :hover span > .mouse{
      display: none;
    }

    :hover span::before {
      box-shadow: 0 0 20px #00efff, -200px -200px 0 #00efff,
        -200px -200px 20px #00efff, 200px 200px 0 #00efff, 200px 200px 20px #00efff,
        200px -200px 0 #00efff, 200px -200px 20px #00efff, -200px 200px 0 #00efff,
        -200px 200px 20px #00efff;
      transform-origin: 250px;
    }

  }
`

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(36deg * ${props=> props.number}));


  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
    border: 4px solid #00efff;
    box-sizing: border-box;
    box-shadow: 0 0 20px #00efff, -30px -30px 0 #00efff, -30px -30px 20px #00efff,
      30px 30px 0 #00efff, 30px 30px 20px #00efff, 30px -30px 0 #00efff,
      30px -30px 20px #00efff, -30px 30px 0 #00efff, -30px 30px 20px #00efff;
    animation: animate 5s linear infinite;
    animation-delay: calc(-0.25s * ${props => props.number});
    transform-origin: 20px;
    transition: 2s;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
      filter: hue-rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
`

export default function First() {
    return (
        <div className="smooth">
            <StyledDiv>
                <StyledSpan number={1}></StyledSpan>
                <StyledSpan number={2}></StyledSpan>
                <StyledSpan number={3}></StyledSpan>
                <StyledSpan number={4}></StyledSpan>
                <StyledSpan number={5}></StyledSpan>
                <StyledSpan number={6}></StyledSpan>
                <StyledSpan number={7}></StyledSpan>
                <StyledSpan number={8}></StyledSpan>
                <StyledSpan number={9}></StyledSpan>
                <StyledSpan number={10}>
                  <ul className="dynamic-txts">
                    <li><span>안녕하세요!</span></li>
                    <li><span>사용자의 편의를</span></li>
                    <li><span>먼저 생각하는</span></li>
                    <li><span>프론트엔드 개발자</span></li>
                    <li><span>김태일입니다.</span></li>
                  </ul>
                  <span className="mouse">마우스를 올려보세요</span>
                </StyledSpan>
            </StyledDiv>
            <style jsx>{`
                .smooth {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    scroll-behavior: smooth;
                    overflow-y: scroll;
                    scroll-snap-type: mandatory;
                    scroll-snap-points-y: repeat(100vh);
                    scroll-snap-type: y mandatory;
                    -ms-overflow-style: none;
                }
                
                .smooth::-webkit-scrollbar {
                    display: none;
                }

                .mouse{
                  font-size:35px;
                  height: 50px;
                  border: solid;
                  position: absolute;
                  top: 120px;
                  left: 60px;
                }

                .dynamic-txts {
                  display: none;
                  position: absolute;
                  top: 120px;
                  left: 20px;
                  margin-left : 15px;
                  height: 35px;
                  line-height: 35px;
                  overflow: hidden;
                }

                .dynamic-txts li{
                  list-style: none;
                  font-size:40px;
                  position: relative;
                  top:0;
                  animation: slide 10s steps(5) forwards;
                }

                @keyframes slide{
                  100%{
                    top: -180px;
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
            `}</style>
        </div>
    )
}