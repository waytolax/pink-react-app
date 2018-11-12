import React from 'react';
import styled, {keyframes} from 'styled-components';
import {media} from './media';

const rotate = keyframes `
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
`;

const StyledLoader = styled.div `
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;

  & div {
  position: absolute;
  border: 4px solid #d22856;
  opacity: 1;
  border-radius: 50%;
  animation: ${rotate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
  animation-delay: -0.5s;
  }

  ${media.tablet`

  `}

  ${media.desktop`
      margin-bottom: 100px;
  `}
`;

const Loader = (props) => {
    return (
        <StyledLoader>
            <div/>
            <div/>
        </StyledLoader>
    );
};

export default Loader;
