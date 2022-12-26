import React from "react";
import styled, { keyframes } from "styled-components";

const loadRing = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

const loadRingTurn = keyframes`
0% {
    transform: rotate(0deg);
    font-size: 1em;
  }
  100% {
    transform: rotate(-360deg);
    font-size: 1.2em;
  }
}
`;

const star = keyframes`
    0% {
      opacity: 0;
      transform: rotate(0deg);
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    75% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
      transform: rotate(360deg);
    }
  }
`;

// const loadRingTurn = keyframes`
// 0% {

//   }
//   100% {

//   }
// }
// `
const BigPreloader = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #e6e6e8;
  z-index: 99999999;
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  display: block;
  top: 300px;
  bottom: auto;
  width: 100%;
  height: 200px;
  text-align: center;
`;

const Ngisolatescope = styled.div`
  display: inline-block;
`;

const Initiatingmagic = styled.div`
  z-index: 99999999;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease;
  -webkit-transition: opacity 1s ease;
  -o-transition: opacity 1s ease;
  -moz-transition: opacity 1s ease;
  opacity: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: block;
  width: 200px;
  height: 200px;
`;

const Magicwrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
`;
const RingOne = styled.div`
  position: absolute;
  border-radius: 100%;
  animation-delay: 0;
  animation-duration: 2s;
  animation-name: ${loadRing};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  top: -1px;
  left: -1px;
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    border-radius: 100%;
    border: 1px solid #592e6f;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1px;
    left: -1px;
  }
  &:after {
    top: 1px;
    left: 1px;
    content: "";
    border-radius: 100%;
    border: 1px solid #592e6f;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const RingTwo = styled.div`
  position: absolute;
  border-radius: 100%;
  animation-delay: 0.5s;
  animation-duration: 2s;
  animation-name: ${loadRingTurn};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  top: -2px;
  left: -2px;
  width: 100%;
  height: 100%;
  transform: rotate(20deg);
  &:before {
    content: "";
    border-radius: 100%;
    border: 1px solid #592e6f;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -2px;
    left: -2px;
  }
  &:after {
    top: 2px;
    left: 2px;
    content: "";
    border-radius: 100%;
    border: 1px solid #592e6f;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const RingThree = styled.div`
  animation-delay: 1s;
  animation-duration: 2s;
  animation-name: ${loadRing};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  top: 2px;
  left: -2px;
  width: 100%;
  height: 100%;
  transform: rotate(-10deg);
  position: absolute;
  border-radius: 100%;
  &:before {
    content: "";
    border-radius: 100%;
    border: 1px solid #592e6f;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 2px;
    left: -2px;
  }
  &:after {
    top: -2px;
    left: 2px;
    content: "";
    border-radius: 100%;
    border: 1px solid #592e6f;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Textloading = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
`;
// const Pathone= styled.path`
// fill: #592e6f;
//   transform: translate(-12, 21.19);
// `;

const Starswrapper = styled.div`
  animation-delay: 0.5s;
  animation-duration: 3.33s;
  animation-name: ${star};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

const StarholderOne = styled.div`
  animation-delay: 0.5s;
  animation-duration: 3.33s;
  animation-name: ${star};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

const StarOne = styled.div`
  transform: rotate(35deg) scale(0.12);
  margin: 15px 15px;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  color: #e87855;
  animation-name: ${star};
  width: 0;
  height: 0;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #e87855;
  border-left: 100px solid transparent;
  &:before {
    border-bottom: 80px solid #e87855;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: "";
    transform: rotate(-35deg);
  }
  &:after {
    position: absolute;
    display: block;
    color: #e87855;
    top: 3px;
    left: -105px;
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #e87855;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: "";
  }
`;

const StarholderTwo = styled.div`
  animation-delay: 1s;
  animation-duration: 6.67s;
  animation-name: ${star};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  opacity: 0;
`;

const StarTwo = styled.div`
  transform: rotate(35deg) scale(0.1);
  margin: 15px 15px;
  top: 0;
  left: 0;
  position: absolute;
  animation-name: ${star};
  display: block;
  color: #e87855;
  width: 0;
  height: 0;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #e87855;
  border-left: 100px solid transparent;
  &:before {
    border-bottom: 80px solid #e87855;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: "";
    transform: rotate(-35deg);
  }
  &:after {
    position: absolute;
    display: block;
    color: #e87855;
    top: 3px;
    left: -105px;
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #e87855;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: "";
  }
`;

const StarholderThree = styled.div`
  animation-delay: 1.5s;
  animation-duration: 10s;
  animation-name: ${star};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  opacity: 0;
`;

const StarThree = styled.div`
  transform: rotate(35deg) scale(0.14);
  margin: 15px 15px;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  color: #e87855;
  width: 0;
  height: 0;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #e87855;
  border-left: 100px solid transparent;
  &:before {
    border-bottom: 80px solid #e87855;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: "";
    transform: rotate(-35deg);
  }
  &:after {
    position: absolute;
    display: block;
    color: #e87855;
    top: 3px;
    left: -105px;
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #e87855;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: "";
  }
`;
export const Loader = () => {
  return (
    <div>
      <BigPreloader>
        <Wrapper>
          <Ngisolatescope>
            <Initiatingmagic>
              <Magicwrapper>
                <RingOne></RingOne>
                <RingTwo></RingTwo>
                <RingThree></RingThree>

                <Textloading>
                  <span ng-if="!$ctrl.textColor || $ctrl.textColor === 'light'">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-10 -20 113.98 97.15"
                    >
                      <title>dw</title>
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M40.64,26.1V73H38.85a.93.93,0,0,1-1-.84l-.34-5.06a17.85,17.85,0,0,1-5.3,4.61,13.64,13.64,0,0,1-6.82,1.71q-6.34,0-9.84-4.09T12,57a21.26,21.26,0,0,1,1-6.56,15.42,15.42,0,0,1,2.87-5.29,13.42,13.42,0,0,1,4.66-3.53,15,15,0,0,1,6.38-1.29,14.13,14.13,0,0,1,6,1.19,12.46,12.46,0,0,1,4.44,3.55v-19ZM37.37,47.81A11.45,11.45,0,0,0,33,43.92a12.63,12.63,0,0,0-5.46-1.13,12.73,12.73,0,0,0-5.3,1,10.32,10.32,0,0,0-3.8,2.92,12.8,12.8,0,0,0-2.31,4.51A20.39,20.39,0,0,0,15.37,57q0,7.15,2.8,10.52t8.1,3.37a11.91,11.91,0,0,0,6.16-1.64,16.28,16.28,0,0,0,4.92-4.61V47.81Z"
                        transform="translate(-12 -21.19)"
                      />
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M95.4,40.92,84,73H81.53a.81.81,0,0,1-.79-.68l-9.36-26c-.12-.32-.22-.65-.31-1s-.17-.65-.24-1a12.25,12.25,0,0,1-.52,1.93l-9.5,26A.82.82,0,0,1,60,73H57.64L46.21,40.92h2.48a1.26,1.26,0,0,1,.79.24,1.21,1.21,0,0,1,.41.53L58.54,67q.21.74.38,1.43c.11.46.21.92.27,1.37l.41-1.37c.14-.46.3-.94.48-1.43l9.16-25.52a.94.94,0,0,1,1-.71h1.34a1,1,0,0,1,1,.71L81.63,67c.16.49.31,1,.45,1.42s.26.9.38,1.35q.14-.68.29-1.35c.1-.45.24-.92.39-1.42l8.71-25.29a1.18,1.18,0,0,1,.45-.56,1.27,1.27,0,0,1,.72-.21H95.4Z"
                        transform="translate(-12 -21.19)"
                      />
                      <g transform="scale(0.75) translate(-93.69 -77.72)">
                        <path
                          style={{
                            fill: "#592e6f",
                            transform: "translate(-12, 21.19)",
                          }}
                          d="M207.2,84l0.9,4.4l4.2,1.8l-3.9,2.3L208,97l-3.4-3l-4.4,1l1.9-4.1l-2.4-3.9l4.5,0.5L207.2,84 M208.3,79.6
            l-2.6,3.1l-2.3,2.6L200,85l-4-0.4L198,88l1.8,3l-1.4,3.2l-1.7,3.7l3.9-0.9l3.4-0.8l2.6,2.3l3,2.7l0.3-4l0.3-3.5l3-1.7l3.5-2
            l-3.7-1.6l-3.2-1.3l-0.7-3.4L208.3,79.6L208.3,79.6z"
                        />
                        <path
                          style={{
                            fill: "#592e6f",
                            transform: "translate(-12, 21.19)",
                          }}
                          d="M198.3,72.4l0.4,1.7l1.6,0.7l-1.5,0.9l-0.1,1.7l-1.3-1.2l-1.7,0.4l0.7-1.6l-0.9-1.5l1.7,0.2L198.3,72.4
          M198.8,70.8l-1,1.2l-0.9,1l-1.3-0.1l-1.5-0.2l0.8,1.3l0.7,1.1l-0.5,1.2l-0.6,1.4l1.5-0.4l1.3-0.3l1,0.9l1.1,1l0.1-1.5l0.1-1.3
          l1.2-0.7l1.3-0.8l-1.4-0.6l-1.2-0.5l-0.3-1.3L198.8,70.8L198.8,70.8z"
                        />
                        <path
                          style={{
                            fill: "#592e6f",
                            transform: "translate(-12, 21.19)",
                          }}
                          d="M219.3,68.4l0.6,2.9l2.7,1.1l-2.5,1.4l-0.2,2.9l-2.2-2l-2.8,0.7l1.2-2.7l-1.5-2.5l2.9,0.3L219.3,68.4
          M220.1,65.6l-1.7,2l-1.5,1.7l-2.2-0.2l-2.6-0.3l1.4,2.2l1.2,1.9l-0.9,2l-1.1,2.4l2.5-0.6l2.2-0.5l1.7,1.5l1.9,1.8l0.2-2.6l0.2-2.2
          l1.9-1.1l2.3-1.3l-2.4-1l-2.1-0.9l-0.5-2.2L220.1,65.6L220.1,65.6z"
                        />
                      </g>
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M27.42,81.91V95h-.86V81.91Z"
                        transform="translate(-12 -21.19)"
                      />
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M34,85.9a4.31,4.31,0,0,1,1.72.33,3.5,3.5,0,0,1,1.28.93,4.13,4.13,0,0,1,.8,1.45,6.72,6.72,0,0,1,0,3.8,4.13,4.13,0,0,1-.8,1.45,3.47,3.47,0,0,1-1.28.93,4.74,4.74,0,0,1-3.45,0A3.51,3.51,0,0,1,31,93.87a4.09,4.09,0,0,1-.8-1.45,6.72,6.72,0,0,1,0-3.8,4.1,4.1,0,0,1,.8-1.45,3.54,3.54,0,0,1,1.29-.93A4.31,4.31,0,0,1,34,85.9Zm0,8.54a3.33,3.33,0,0,0,1.4-.27,2.66,2.66,0,0,0,1-.79,3.47,3.47,0,0,0,.6-1.24,6.75,6.75,0,0,0,0-3.24,3.53,3.53,0,0,0-.6-1.25,2.67,2.67,0,0,0-1-.8,3.65,3.65,0,0,0-2.8,0,2.67,2.67,0,0,0-1,.8A3.58,3.58,0,0,0,31,88.9a6.59,6.59,0,0,0,0,3.24,3.52,3.52,0,0,0,.6,1.24,2.66,2.66,0,0,0,1,.79A3.33,3.33,0,0,0,34,94.44Z"
                        transform="translate(-12 -21.19)"
                      />
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M40.25,87.31a5.19,5.19,0,0,1,1.48-1.06,4.11,4.11,0,0,1,1.75-.36,3.21,3.21,0,0,1,1.26.23,2.33,2.33,0,0,1,.9.66,2.87,2.87,0,0,1,.54,1,4.76,4.76,0,0,1,.18,1.35V95H46a.31.31,0,0,1-.33-.25l-.13-1.15a9.42,9.42,0,0,1-.73.65,4.43,4.43,0,0,1-.76.49,3.92,3.92,0,0,1-.85.31,4.39,4.39,0,0,1-1,.11A3,3,0,0,1,41.3,95a2.24,2.24,0,0,1-.77-.41,2,2,0,0,1-.54-.71,2.48,2.48,0,0,1-.2-1,1.86,1.86,0,0,1,.32-1.05,2.66,2.66,0,0,1,1-.85,6.77,6.77,0,0,1,1.78-.58,15.4,15.4,0,0,1,2.61-.25v-.94A3,3,0,0,0,45,87.26a1.91,1.91,0,0,0-1.59-.67,3,3,0,0,0-1.1.18,3.87,3.87,0,0,0-.77.4,4.85,4.85,0,0,0-.51.4.56.56,0,0,1-.33.18.28.28,0,0,1-.16,0,.41.41,0,0,1-.11-.12Zm5.26,3.36a16.93,16.93,0,0,0-2.2.2,6.37,6.37,0,0,0-1.52.43,2.27,2.27,0,0,0-.89.64,1.36,1.36,0,0,0-.29.85,1.87,1.87,0,0,0,.15.78,1.5,1.5,0,0,0,.4.54,1.56,1.56,0,0,0,.57.31,2.28,2.28,0,0,0,.67.1,3.83,3.83,0,0,0,1-.11,3.53,3.53,0,0,0,.81-.31,4,4,0,0,0,.7-.48q.32-.28.64-.6Z"
                        transform="translate(-12 -21.19)"
                      />
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M56.18,81.91V95h-.47a.25.25,0,0,1-.27-.23l-.09-1.41A4.76,4.76,0,0,1,54,94.64a3.38,3.38,0,0,1-1.78.48A3.11,3.11,0,0,1,49.61,94a5.4,5.4,0,0,1-.92-3.43,6.31,6.31,0,0,1,.26-1.83,4.39,4.39,0,0,1,.75-1.48,3.55,3.55,0,0,1,1.22-1,3.7,3.7,0,0,1,1.67-.36,3.49,3.49,0,0,1,1.57.33,3.31,3.31,0,0,1,1.16,1V81.91ZM55.32,88a3.07,3.07,0,0,0-1.14-1.09,3.43,3.43,0,0,0-2.81,0,2.71,2.71,0,0,0-1,.81,3.66,3.66,0,0,0-.6,1.26,6,6,0,0,0-.2,1.62,4.77,4.77,0,0,0,.73,2.94,2.53,2.53,0,0,0,2.12.94A3,3,0,0,0,54,94a4.36,4.36,0,0,0,1.29-1.29Z"
                        transform="translate(-12 -21.19)"
                      />
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M60.45,83a.68.68,0,0,1-.07.3.92.92,0,0,1-.17.25.82.82,0,0,1-.25.17.77.77,0,0,1-.61,0,.82.82,0,0,1-.25-.17.83.83,0,0,1-.17-.25.72.72,0,0,1-.06-.3.79.79,0,0,1,.06-.31.8.8,0,0,1,.17-.26.83.83,0,0,1,.25-.17.78.78,0,0,1,.61,0,.83.83,0,0,1,.25.17.88.88,0,0,1,.17.26A.74.74,0,0,1,60.45,83ZM60.08,86v9h-.86V86Z"
                        transform="translate(-12 -21.19)"
                      />
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M64,87.61a5.06,5.06,0,0,1,1.44-1.24,3.57,3.57,0,0,1,1.81-.47,3.38,3.38,0,0,1,1.3.23,2.39,2.39,0,0,1,.93.67A3,3,0,0,1,70,87.87a4.82,4.82,0,0,1,.19,1.4V95h-.86V89.28a3.07,3.07,0,0,0-.58-2A2.12,2.12,0,0,0,67,86.58a3.18,3.18,0,0,0-1.63.45A4.63,4.63,0,0,0,64,88.27V95h-.86V86h.48a.24.24,0,0,1,.26.22Z"
                        transform="translate(-12 -21.19)"
                      />
                      <path
                        style={{
                          fill: "#592e6f",
                          transform: "translate(-12, 21.19)",
                        }}
                        d="M80.24,86.44v.3q0,.2-.25.24l-1.37.1a2.65,2.65,0,0,1,.39.76,3,3,0,0,1,.13.92,2.9,2.9,0,0,1-.23,1.17,2.58,2.58,0,0,1-.65.9,3,3,0,0,1-1,.58,3.91,3.91,0,0,1-1.3.21,4,4,0,0,1-1.4-.23,2,2,0,0,0-.6.51,1,1,0,0,0-.22.58.7.7,0,0,0,.28.59,1.81,1.81,0,0,0,.72.3,6.51,6.51,0,0,0,1,.12l1.17.06q.59,0,1.17.11a3.72,3.72,0,0,1,1,.28,1.84,1.84,0,0,1,.72.57,1.57,1.57,0,0,1,.27,1,2.2,2.2,0,0,1-.28,1.07,2.81,2.81,0,0,1-.81.91,4.26,4.26,0,0,1-1.27.63,5.48,5.48,0,0,1-1.67.24,6.35,6.35,0,0,1-1.66-.19,3.93,3.93,0,0,1-1.19-.52,2.29,2.29,0,0,1-.72-.76,1.85,1.85,0,0,1-.24-.92,1.73,1.73,0,0,1,.47-1.22,3.12,3.12,0,0,1,1.28-.8,1.72,1.72,0,0,1-.72-.45,1.11,1.11,0,0,1-.27-.8,1.2,1.2,0,0,1,.07-.4,1.64,1.64,0,0,1,.22-.41,2.18,2.18,0,0,1,.35-.38,2.72,2.72,0,0,1,.47-.32,2.66,2.66,0,0,1-1-1,2.8,2.8,0,0,1-.36-1.43A2.9,2.9,0,0,1,73,87.59a2.57,2.57,0,0,1,.65-.91,3,3,0,0,1,1-.58,4.23,4.23,0,0,1,2.4-.06,3.22,3.22,0,0,1,.9.41Zm-.94,9.16a1,1,0,0,0-.22-.68,1.46,1.46,0,0,0-.59-.4,3.48,3.48,0,0,0-.85-.2q-.48-.06-1-.08l-1.06-.05a8.31,8.31,0,0,1-1-.11,4.08,4.08,0,0,0-.63.31,2.27,2.27,0,0,0-.49.4,1.77,1.77,0,0,0-.32.49,1.44,1.44,0,0,0,.08,1.3,1.79,1.79,0,0,0,.59.58,3.3,3.3,0,0,0,1,.39,5.29,5.29,0,0,0,1.3.14,5,5,0,0,0,1.27-.15,3.54,3.54,0,0,0,1-.43,2.22,2.22,0,0,0,.68-.67A1.55,1.55,0,0,0,79.31,95.6ZM76,91a2.93,2.93,0,0,0,1-.17,2.12,2.12,0,0,0,.76-.46,2,2,0,0,0,.47-.71,2.51,2.51,0,0,0,.16-.92,2.47,2.47,0,0,0-.17-.92,2,2,0,0,0-.48-.72,2.14,2.14,0,0,0-.76-.46,3.26,3.26,0,0,0-2,0,2.15,2.15,0,0,0-.76.46,1.94,1.94,0,0,0-.47.72,2.53,2.53,0,0,0-.16.92,2.49,2.49,0,0,0,.16.92,2,2,0,0,0,.47.71,2.17,2.17,0,0,0,.76.46A2.87,2.87,0,0,0,76,91Z"
                        transform="translate(-12 -21.19)"
                      />
                    </svg>
                  </span>
                  {/* <span ng-if="$ctrl.textColor === 'dark'">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-10 -20 113.98 97.15"
                  >
                    <title>dw</title>
                    <path
                      d="M40.64,26.1V73H38.85a.93.93,0,0,1-1-.84l-.34-5.06a17.85,17.85,0,0,1-5.3,4.61,13.64,13.64,0,0,1-6.82,1.71q-6.34,0-9.84-4.09T12,57a21.26,21.26,0,0,1,1-6.56,15.42,15.42,0,0,1,2.87-5.29,13.42,13.42,0,0,1,4.66-3.53,15,15,0,0,1,6.38-1.29,14.13,14.13,0,0,1,6,1.19,12.46,12.46,0,0,1,4.44,3.55v-19ZM37.37,47.81A11.45,11.45,0,0,0,33,43.92a12.63,12.63,0,0,0-5.46-1.13,12.73,12.73,0,0,0-5.3,1,10.32,10.32,0,0,0-3.8,2.92,12.8,12.8,0,0,0-2.31,4.51A20.39,20.39,0,0,0,15.37,57q0,7.15,2.8,10.52t8.1,3.37a11.91,11.91,0,0,0,6.16-1.64,16.28,16.28,0,0,0,4.92-4.61V47.81Z"
                      transform="translate(-12 -21.19)"
                    />
                    <path
                      d="M95.4,40.92,84,73H81.53a.81.81,0,0,1-.79-.68l-9.36-26c-.12-.32-.22-.65-.31-1s-.17-.65-.24-1a12.25,12.25,0,0,1-.52,1.93l-9.5,26A.82.82,0,0,1,60,73H57.64L46.21,40.92h2.48a1.26,1.26,0,0,1,.79.24,1.21,1.21,0,0,1,.41.53L58.54,67q.21.74.38,1.43c.11.46.21.92.27,1.37l.41-1.37c.14-.46.3-.94.48-1.43l9.16-25.52a.94.94,0,0,1,1-.71h1.34a1,1,0,0,1,1,.71L81.63,67c.16.49.31,1,.45,1.42s.26.9.38,1.35q.14-.68.29-1.35c.1-.45.24-.92.39-1.42l8.71-25.29a1.18,1.18,0,0,1,.45-.56,1.27,1.27,0,0,1,.72-.21H95.4Z"
                      transform="translate(-12 -21.19)"
                    />
                    <g transform="scale(0.75) translate(-93.69 -77.72)">
                      <path
                        d="M207.2,84l0.9,4.4l4.2,1.8l-3.9,2.3L208,97l-3.4-3l-4.4,1l1.9-4.1l-2.4-3.9l4.5,0.5L207.2,84 M208.3,79.6
            l-2.6,3.1l-2.3,2.6L200,85l-4-0.4L198,88l1.8,3l-1.4,3.2l-1.7,3.7l3.9-0.9l3.4-0.8l2.6,2.3l3,2.7l0.3-4l0.3-3.5l3-1.7l3.5-2
            l-3.7-1.6l-3.2-1.3l-0.7-3.4L208.3,79.6L208.3,79.6z"
                      />
                      <path
                        d="M198.3,72.4l0.4,1.7l1.6,0.7l-1.5,0.9l-0.1,1.7l-1.3-1.2l-1.7,0.4l0.7-1.6l-0.9-1.5l1.7,0.2L198.3,72.4
          M198.8,70.8l-1,1.2l-0.9,1l-1.3-0.1l-1.5-0.2l0.8,1.3l0.7,1.1l-0.5,1.2l-0.6,1.4l1.5-0.4l1.3-0.3l1,0.9l1.1,1l0.1-1.5l0.1-1.3
          l1.2-0.7l1.3-0.8l-1.4-0.6l-1.2-0.5l-0.3-1.3L198.8,70.8L198.8,70.8z"
                      />
                      <path
                        d="M219.3,68.4l0.6,2.9l2.7,1.1l-2.5,1.4l-0.2,2.9l-2.2-2l-2.8,0.7l1.2-2.7l-1.5-2.5l2.9,0.3L219.3,68.4
          M220.1,65.6l-1.7,2l-1.5,1.7l-2.2-0.2l-2.6-0.3l1.4,2.2l1.2,1.9l-0.9,2l-1.1,2.4l2.5-0.6l2.2-0.5l1.7,1.5l1.9,1.8l0.2-2.6l0.2-2.2
          l1.9-1.1l2.3-1.3l-2.4-1l-2.1-0.9l-0.5-2.2L220.1,65.6L220.1,65.6z"
                      />
                    </g>
                    <path
                      d="M27.42,81.91V95h-.86V81.91Z"
                      transform="translate(-12 -21.19)"
                    />
                    <path
                      d="M34,85.9a4.31,4.31,0,0,1,1.72.33,3.5,3.5,0,0,1,1.28.93,4.13,4.13,0,0,1,.8,1.45,6.72,6.72,0,0,1,0,3.8,4.13,4.13,0,0,1-.8,1.45,3.47,3.47,0,0,1-1.28.93,4.74,4.74,0,0,1-3.45,0A3.51,3.51,0,0,1,31,93.87a4.09,4.09,0,0,1-.8-1.45,6.72,6.72,0,0,1,0-3.8,4.1,4.1,0,0,1,.8-1.45,3.54,3.54,0,0,1,1.29-.93A4.31,4.31,0,0,1,34,85.9Zm0,8.54a3.33,3.33,0,0,0,1.4-.27,2.66,2.66,0,0,0,1-.79,3.47,3.47,0,0,0,.6-1.24,6.75,6.75,0,0,0,0-3.24,3.53,3.53,0,0,0-.6-1.25,2.67,2.67,0,0,0-1-.8,3.65,3.65,0,0,0-2.8,0,2.67,2.67,0,0,0-1,.8A3.58,3.58,0,0,0,31,88.9a6.59,6.59,0,0,0,0,3.24,3.52,3.52,0,0,0,.6,1.24,2.66,2.66,0,0,0,1,.79A3.33,3.33,0,0,0,34,94.44Z"
                      transform="translate(-12 -21.19)"
                    />
                    <path
                      d="M40.25,87.31a5.19,5.19,0,0,1,1.48-1.06,4.11,4.11,0,0,1,1.75-.36,3.21,3.21,0,0,1,1.26.23,2.33,2.33,0,0,1,.9.66,2.87,2.87,0,0,1,.54,1,4.76,4.76,0,0,1,.18,1.35V95H46a.31.31,0,0,1-.33-.25l-.13-1.15a9.42,9.42,0,0,1-.73.65,4.43,4.43,0,0,1-.76.49,3.92,3.92,0,0,1-.85.31,4.39,4.39,0,0,1-1,.11A3,3,0,0,1,41.3,95a2.24,2.24,0,0,1-.77-.41,2,2,0,0,1-.54-.71,2.48,2.48,0,0,1-.2-1,1.86,1.86,0,0,1,.32-1.05,2.66,2.66,0,0,1,1-.85,6.77,6.77,0,0,1,1.78-.58,15.4,15.4,0,0,1,2.61-.25v-.94A3,3,0,0,0,45,87.26a1.91,1.91,0,0,0-1.59-.67,3,3,0,0,0-1.1.18,3.87,3.87,0,0,0-.77.4,4.85,4.85,0,0,0-.51.4.56.56,0,0,1-.33.18.28.28,0,0,1-.16,0,.41.41,0,0,1-.11-.12Zm5.26,3.36a16.93,16.93,0,0,0-2.2.2,6.37,6.37,0,0,0-1.52.43,2.27,2.27,0,0,0-.89.64,1.36,1.36,0,0,0-.29.85,1.87,1.87,0,0,0,.15.78,1.5,1.5,0,0,0,.4.54,1.56,1.56,0,0,0,.57.31,2.28,2.28,0,0,0,.67.1,3.83,3.83,0,0,0,1-.11,3.53,3.53,0,0,0,.81-.31,4,4,0,0,0,.7-.48q.32-.28.64-.6Z"
                      transform="translate(-12 -21.19)"
                    />
                    <path
                      d="M56.18,81.91V95h-.47a.25.25,0,0,1-.27-.23l-.09-1.41A4.76,4.76,0,0,1,54,94.64a3.38,3.38,0,0,1-1.78.48A3.11,3.11,0,0,1,49.61,94a5.4,5.4,0,0,1-.92-3.43,6.31,6.31,0,0,1,.26-1.83,4.39,4.39,0,0,1,.75-1.48,3.55,3.55,0,0,1,1.22-1,3.7,3.7,0,0,1,1.67-.36,3.49,3.49,0,0,1,1.57.33,3.31,3.31,0,0,1,1.16,1V81.91ZM55.32,88a3.07,3.07,0,0,0-1.14-1.09,3.43,3.43,0,0,0-2.81,0,2.71,2.71,0,0,0-1,.81,3.66,3.66,0,0,0-.6,1.26,6,6,0,0,0-.2,1.62,4.77,4.77,0,0,0,.73,2.94,2.53,2.53,0,0,0,2.12.94A3,3,0,0,0,54,94a4.36,4.36,0,0,0,1.29-1.29Z"
                      transform="translate(-12 -21.19)"
                    />
                    <path
                      d="M60.45,83a.68.68,0,0,1-.07.3.92.92,0,0,1-.17.25.82.82,0,0,1-.25.17.77.77,0,0,1-.61,0,.82.82,0,0,1-.25-.17.83.83,0,0,1-.17-.25.72.72,0,0,1-.06-.3.79.79,0,0,1,.06-.31.8.8,0,0,1,.17-.26.83.83,0,0,1,.25-.17.78.78,0,0,1,.61,0,.83.83,0,0,1,.25.17.88.88,0,0,1,.17.26A.74.74,0,0,1,60.45,83ZM60.08,86v9h-.86V86Z"
                      transform="translate(-12 -21.19)"
                    />
                    <path
                      d="M64,87.61a5.06,5.06,0,0,1,1.44-1.24,3.57,3.57,0,0,1,1.81-.47,3.38,3.38,0,0,1,1.3.23,2.39,2.39,0,0,1,.93.67A3,3,0,0,1,70,87.87a4.82,4.82,0,0,1,.19,1.4V95h-.86V89.28a3.07,3.07,0,0,0-.58-2A2.12,2.12,0,0,0,67,86.58a3.18,3.18,0,0,0-1.63.45A4.63,4.63,0,0,0,64,88.27V95h-.86V86h.48a.24.24,0,0,1,.26.22Z"
                      transform="translate(-12 -21.19)"
                    />
                    <path
                      d="M80.24,86.44v.3q0,.2-.25.24l-1.37.1a2.65,2.65,0,0,1,.39.76,3,3,0,0,1,.13.92,2.9,2.9,0,0,1-.23,1.17,2.58,2.58,0,0,1-.65.9,3,3,0,0,1-1,.58,3.91,3.91,0,0,1-1.3.21,4,4,0,0,1-1.4-.23,2,2,0,0,0-.6.51,1,1,0,0,0-.22.58.7.7,0,0,0,.28.59,1.81,1.81,0,0,0,.72.3,6.51,6.51,0,0,0,1,.12l1.17.06q.59,0,1.17.11a3.72,3.72,0,0,1,1,.28,1.84,1.84,0,0,1,.72.57,1.57,1.57,0,0,1,.27,1,2.2,2.2,0,0,1-.28,1.07,2.81,2.81,0,0,1-.81.91,4.26,4.26,0,0,1-1.27.63,5.48,5.48,0,0,1-1.67.24,6.35,6.35,0,0,1-1.66-.19,3.93,3.93,0,0,1-1.19-.52,2.29,2.29,0,0,1-.72-.76,1.85,1.85,0,0,1-.24-.92,1.73,1.73,0,0,1,.47-1.22,3.12,3.12,0,0,1,1.28-.8,1.72,1.72,0,0,1-.72-.45,1.11,1.11,0,0,1-.27-.8,1.2,1.2,0,0,1,.07-.4,1.64,1.64,0,0,1,.22-.41,2.18,2.18,0,0,1,.35-.38,2.72,2.72,0,0,1,.47-.32,2.66,2.66,0,0,1-1-1,2.8,2.8,0,0,1-.36-1.43A2.9,2.9,0,0,1,73,87.59a2.57,2.57,0,0,1,.65-.91,3,3,0,0,1,1-.58,4.23,4.23,0,0,1,2.4-.06,3.22,3.22,0,0,1,.9.41Zm-.94,9.16a1,1,0,0,0-.22-.68,1.46,1.46,0,0,0-.59-.4,3.48,3.48,0,0,0-.85-.2q-.48-.06-1-.08l-1.06-.05a8.31,8.31,0,0,1-1-.11,4.08,4.08,0,0,0-.63.31,2.27,2.27,0,0,0-.49.4,1.77,1.77,0,0,0-.32.49,1.44,1.44,0,0,0,.08,1.3,1.79,1.79,0,0,0,.59.58,3.3,3.3,0,0,0,1,.39,5.29,5.29,0,0,0,1.3.14,5,5,0,0,0,1.27-.15,3.54,3.54,0,0,0,1-.43,2.22,2.22,0,0,0,.68-.67A1.55,1.55,0,0,0,79.31,95.6ZM76,91a2.93,2.93,0,0,0,1-.17,2.12,2.12,0,0,0,.76-.46,2,2,0,0,0,.47-.71,2.51,2.51,0,0,0,.16-.92,2.47,2.47,0,0,0-.17-.92,2,2,0,0,0-.48-.72,2.14,2.14,0,0,0-.76-.46,3.26,3.26,0,0,0-2,0,2.15,2.15,0,0,0-.76.46,1.94,1.94,0,0,0-.47.72,2.53,2.53,0,0,0-.16.92,2.49,2.49,0,0,0,.16.92,2,2,0,0,0,.47.71,2.17,2.17,0,0,0,.76.46A2.87,2.87,0,0,0,76,91Z"
                      transform="translate(-12 -21.19)"
                    />
                  </svg>
                </span> */}
                </Textloading>
                <Starswrapper>
                  <StarholderOne>
                    <StarOne></StarOne>
                  </StarholderOne>

                  <StarholderTwo>
                    <StarTwo></StarTwo>
                  </StarholderTwo>

                  <StarholderThree>
                    <StarThree></StarThree>
                  </StarholderThree>
                </Starswrapper>
              </Magicwrapper>
            </Initiatingmagic>
          </Ngisolatescope>
        </Wrapper>
      </BigPreloader>
      <span style={{ color: "black", bottom: "30px" }} className="textBig">
        Hang tight, we're setting things up for you!
      </span>
    </div>
  );
};
