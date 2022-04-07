import styled from "styled-components";

const StyleBar = styled.span`
    height: 100%;
    width: ${props => props.percent};
    background: ${props => props.color};
    position: absolute;
    border-radius: 10px;

    :hover{
        transform:scaleY(1.2);
    }

    ::before{
        position: absolute;
        right: 0;
        top: -10px;
        content: "";
        height: 0;
        width: 0;
        border: 7px solid transparent;
        border-bottom-width: 0px;
        border-right-width: 0px;
        border-top-color: #f4f4f4;
    }

    &&:after{
        position: absolute;
        right: 0;
        top: -37px;
        content: ${(props) => `"${props.percent}"`};
        font-size: 18px;
        color: #1D1D1D;
        font-weight: 600;
        background: #f4f4f4;
        padding: 1px 8px;
        border-radius: 3px;
    }

    @media screen and (max-width: 768px) {
        &&:after{
            top: -32px;
            font-size: 15px;
            padding: 1px 5px;
        }
    }
`

export default function SkillBar({data}){
    return (
        <div className="bar">
            <div className="info">
                <span>{data.name}</span>
            </div>
            <div className="progress-line">
                <StyleBar percent={data.percent} color={data.color}></StyleBar>
            </div>
            <style jsx>{`
                .bar{
                    margin: 20px 0;
                }

                .bar:first-child{
                    margin-top: 0px;
                }

                .info{
                    margin-bottom: 5px;
                }

                .info span{
                    font-size: 20px;
                    font-weight: 500;
                }

                .progress-line{
                    position: relative;
                    height: 15px;
                    width: 100%;
                    background: #47474b9f;
                    border-radius: 10px;
                    transform: scaleX(0);
                    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.05),
                                      0px 1px rgba(255, 255, 255, 0.3);
                    animation: bar 1s cubic-bezier(1, 0, 0.5, 1) forwards;
                    animation-play-state: paused;
                }

                @keyframes bar{
                    100%{
                        transform: scaleX(1);
                    }
                }
                
                @media screen and (max-width: 768px) {
                    .info span{
                        font-size: 15px;
                    }
                    .progress-line{
                        height: 10px;
                    }
                }
            `}</style>
        </div>
    )
}