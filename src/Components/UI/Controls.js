import React from 'react'
import styled from 'styled-components';
import {media} from './media';

const StyledArrows = styled.button`
    display: none;
    position: absolute;
    top: 213px;
    background-color: transparent;
    border: none;
    opacity: 0.3;
    cursor: pointer

    &:nth-of-type(1){
    left: 125px;
    }
    &:nth-of-type(2){
    right: 125px;
    }
    &:hover{
        opacity: 0.6;
    }
    &:active{
        opacity: 0.3;
    }

    ${media.desktop`
        display: block;
    `}
`;

const StyledControls = styled.div`
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px auto;

    & input:focus + label {
        outline: 1px solid blue;
    }

    & label {
        width: 7px;
        height: 7px;
        background-color: rgba(45, 54, 69, 0.3);
        border-radius: 100%;
        cursor: pointer;
    }

    & input:checked + label {
        ${'' /* border: 3px solid #283645; */}
        background-color: #fff;
        box-shadow: 0px 0px 0px 3px #283645;
    }

    & label:hover {
        background-color: rgba(45, 54, 69, 0.6);
    }

    & label:active {
        background-color: rgba(45, 54, 69, 0.2);
    }

    ${media.tablet`
        margin-top: ${props => props.type === 'review' ? '20px' : null}
    `}
    ${media.desktop`
        display: ${props => props.type === 'review' ? 'none' : null}
    `}
`;

export function SampleNextArrow(props) {
  return (
      <StyledArrows
          onClick={props.onClick}
          aria-label="Следующий отзыв"
      >
          <svg  width="22" height="41">
              <use xlinkHref="#icon-review-arrow-right"/>
          </svg>
      </StyledArrows>
  );
}

export function SamplePrevArrow(props) {
  return (
      <StyledArrows
          onClick={props.onClick}
          aria-label="Предыдущий отзыв"
      >
          <svg  width="22" height="41">
              <use xlinkHref="#icon-review-arrow-left"/>
          </svg>
      </StyledArrows>
  );
}

export const Controls = (props) => {
    return (
        <StyledControls type={props.type}>
            <input
                className='visually-hidden'
                type="radio"
                id={`${props.type}-1`}
                name={`${props.type}-controls`}
                onChange={props.onChange}
            />
            <label htmlFor={`${props.type}-1`}/>
            <input
                className='visually-hidden'
                type="radio"
                id={`${props.type}-2`}
                name={`${props.type}-controls`}
                defaultChecked
                onChange={props.onChange}
            />
            <label htmlFor={`${props.type}-2`}/>
            <input
                className='visually-hidden'
                type="radio"
                id={`${props.type}-3`}
                name={`${props.type}-controls`}
                onChange={props.onChange}
            />
            <label htmlFor={`${props.type}-3`}/>
        </StyledControls>
    )
}
