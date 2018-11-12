import React from 'react';
import styled from 'styled-components';
import Logo from '../UI/Logo';
import {media} from '../UI/media';

const StyledToggle = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 13px 20px 20px;
    background-color: rgba(0,0,0,0.3);

    &.opened button svg:last-child,
    &.closed button svg:first-child{
        display: none;
    }
    &.opened{
        position: static;
        border-bottom: 1px solid #000;
        background-color: #283645;
    }

    & button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        fill: #fff;
        z-index: 10;
    }
    & svg:hover{
        fill: #d22856;
    }
    & svg:active{
        opacity: 0.5;
    }
    ${media.tablet`
        padding-top: 27px;
        padding-bottom: 38px;
    `};
    ${media.desktop`
        display: none;
    `};

`;

const NavToggle = (props) => {
    return (
        <StyledToggle className={props.className}>
            <Logo />
            <button
                onClick={props.onToggleHandler}
                aria-label="Открыть или Закрыть Меню"
            >
                <svg width="25" height="24">
                    <use xlinkHref="#icon-menu-cross"/>
                </svg>
                <svg width="50" height="24">
                    <use xlinkHref="#icon-menu-burger"/>
                </svg>
            </button>
        </StyledToggle>
    )
}

export default NavToggle;
