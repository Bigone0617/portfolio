import styled from "styled-components";

const StyleSpan = styled.span`
    position: absolute;
    top: calc(80px * ${props => props.number});
    left: calc(80px * ${props => props.number});
    bottom: calc(80px * ${props => props.number});
    right: calc(80px * ${props => props.number});

    &&:before{
        content:"";
        position: absolute;
        top: 50%:
        left: -8px;
        width: 15px;
        height: 15px;
        background: #f00;
        border-radius: 50%;
    }

    :nth-child(3n + 1):before{
        background: rgba(134, 255, 0, 1);
        box-shadow: 0 0 20px rgba(134, 255, 0, 1),
                    0 0 40px rgba(134, 255, 0, 1),
                    0 0 60px rgba(134, 255, 0, 1),
                    0 0 80px rgba(134, 255, 0, 1),
                    0 0 0 8px rgba(134, 255, 0, 0.1);

    }

    :nth-child(3n + 2):before{
        background: rgba(255, 214, 0, 1);
        box-shadow: 0 0 20px rgba(255, 214, 0, 1),
                    0 0 40px rgba(255, 214, 0, 1),
                    0 0 60px rgba(255, 214, 0, 1),
                    0 0 80px rgba(255, 214, 0, 1),
                    0 0 0 8px rgba(255, 214, 0, 0.1);

    }

    :nth-child(3n + 3):before{
        background: rgba(0, 226, 255, 1);
        box-shadow: 0 0 20px rgba(0, 226, 255, 1),
                    0 0 40px rgba(0, 226, 255, 1),
                    0 0 60px rgba(0, 226, 255, 1),
                    0 0 80px rgba(0, 226, 255, 1),
                    0 0 0 8px rgba(0, 226, 255, 0.1);

    }

    :nth-child(3n + 1){
        animation: animate 15s alternate infinite;
    }
    :nth-child(3n + 2){
        animation: animate-revers 5s alternate infinite;
    }
    :nth-child(3n + 3){
        animation: animate 10s alternate infinite;
    }

    @keyframes animate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @keyframes animate-revers {
        0%{
            transform: rotate(360deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
`

export default function First2(){

    return (
        <div className="first_wrapper">
            <div className="glowing">
                <StyleSpan number={1}></StyleSpan>
                <StyleSpan number={2}></StyleSpan>
                <StyleSpan number={3}></StyleSpan>
            </div>
            <div className="glowing">
                <StyleSpan number={1}></StyleSpan>
                <StyleSpan number={2}></StyleSpan>
                <StyleSpan number={3}></StyleSpan>
            </div>
            <div className="glowing">
                <StyleSpan number={1}></StyleSpan>
                <StyleSpan number={2}></StyleSpan>
                <StyleSpan number={3}></StyleSpan>
            </div>
            <div className="glowing">
                <StyleSpan number={1}></StyleSpan>
                <StyleSpan number={2}></StyleSpan>
                <StyleSpan number={3}></StyleSpan>
            </div>
        <style jsx>{`
            .first_wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                min-height: 100vh;
                overflow: hidden;
            }

            .glowing{
                position: relative;
                min-width: 750px;
                height: 750px;
                margin: -150px;
                transform-origin: right;
                animation: colorChange 10s linear infinite;
            }

            .glowing:nth-child(even){
                transform-origin: left;
            }

            @keyframes colorChange{
                0%{
                    filter: hue-rotate(0deg);
                    transform: rotate(0deg);
                }
                100%{
                    filter: hue-rotate(360deg);
                    transform: rotate(360deg);
                }
            }
        `}</style>
        </div>
    )
}