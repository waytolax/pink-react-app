import React from 'react';
import styled from 'styled-components';
import {media} from '../UI/media';

const StyledBtn = styled.div`
    position: relative;
    padding-left: 26px;

    & button {
        background-color: transparent;
        border: none;
        text-transform: uppercase;
        font-size: 12px;
        color: #d22856;
        cursor: pointer;
    }

    & button::before {
        content: '';
        position: absolute;
        top: 7px;
        left: 1px;
        height: 13px;
        width: 13px;
        background-image: url("./img/svg/icon-heart.svg");
        background-repeat: no-repeat;
        background-size: contain;
    }

    &.liked button::before {
        top: 5px;
        left: -1px;
        height: 18px;
        width: 18px;
    }

    & button:active {
        opacity: 0.5;
    }

    & output {
        font-size: 12px;
        color: #d22856;
    }

    ${media.tablet`
        padding-right: 40px;
        padding-left: 0;

        & button::before {
            right: 0;
			left: auto;
			top: 5px;
        }

        &.best button::before {
            right: 9px;
			left: auto;
        }

        &.liked button::before {
            right: -3px;
			left: auto;
			top: 3px;
        }

        &.best.liked button::before {
            top: 5px;
			left: auto;
			right: 7px;
        }
    `}

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        display: none;
    }
`;

const LikeBtn = (props) => {
    return (
        <StyledBtn
            className={props.liked ? 'liked' : undefined}>
            <button
                id={`article-${props.id}`}
                onClick={props.onClick}
                type="button"
             >нравится:</button>
            <output>{props.likes}</output>
        </StyledBtn>
    );
};

export default LikeBtn;
