import React from 'react'
import styled from 'styled-components';
import {media} from './media';

const StyledButton = styled.button`
    margin: 0;
    padding: 15px 45px;
    border: 2px solid #2aab6d;
    background-color: #2aab6d;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
    cursor: pointer;

    &:not(:disabled):hover {
        background-color: #1c9b5e;
    }

    &:active {
        color: rgba(255,255,255,0.3);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${media.tablet`
        padding: 15px 55px;
    `}
`;

const StyledRounded = styled.button`
    margin-bottom: 10px;
    padding: 16px;
    border: 3px solid #d22856;
    border-radius: 30px;
    background-color: #f2f2f2;
    color: #d22856;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    cursor: pointer;

    &:disabled {
        color: rgba(0, 0, 0, 0.3);
        border-color: rgba(0, 0, 0, 0.3);
        cursor: not-allowed;
	}

	&:not(:disabled):hover {
		color: #ffffff;
		background-color: #d22856;
	}

	&:active {
		color: rgba(255, 255, 255, 0.3);
	}

    ${media.tablet`
        padding: 16px 77px;
        margin-bottom: 23px;
    `}

    ${media.desktop`
        min-width: 200px
        padding: 16px;
        margin-bottom: 0;

        &:first-child {
			margin-right: 20px;
		}
    `}
`;

export const Button = (props) => {
    return (
        <StyledButton
            type={props.type || 'button'}
            onClick={props.onClick}
            autoFocus={props.autoFocus}
            disabled={props.disabled}
        >{props.children}
        </StyledButton>
    )
}

export const RoundedButton = (props) => {
    return (
        <StyledRounded
            disabled={props.disabled}
            onClick={props.onClick}
        >{props.children}
        </StyledRounded>
    )
}

export default RoundedButton
