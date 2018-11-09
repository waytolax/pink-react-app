import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {media} from './media';

const StyledLink = styled(Link)`
    &.footer{
        margin-bottom: 40px;
        align-self: center;
    }

    ${media.tablet`
        height: 40px;

        &.footer{
            margin-bottom: 0;
			padding-bottom: 10px;
        }
    `}
`;

const StyledLogo = styled.svg`
    fill: #fff;
    margin-right: 8vw;

    &.footer{
        fill: #000;
        margin-right: 0;
    }
    &:hover {
        fill: #d22856;
    }
    &:active {
        fill: #fff;
        opacity: 0.5;
    }
    &.footer:active{
        fill: #000;
    }

     ${media.tablet`
         &.footer{
            margin-bottom: 0;
         }
     `}
`;

const Logo = (props) => {

    const getMedia = () => {
        return window.innerWidth < 660 ? 'mobile' : window.innerWidth >= 960 ? 'desktop' : props.className !== 'footer' ? 'tablet' : 'desktop'
    }

    return (
            <StyledLink
                aria-label="Логотип сайта Pink"
                to='/'
                className={props.className}
            >
                <StyledLogo
                    width={getMedia() !== 'mobile' || props.className === 'footer' ? '146' : '75'}
                    height={getMedia() !== 'mobile' || props.className === 'footer' ? "40" : "24"}
                    className={props.className}

                >
                    {
                        props.className === 'footer'
                            ? <use xlinkHref={`#icon-logo-pink-blue-${getMedia()}`}/>
                            : <use xlinkHref={`#icon-logo-pink-white-${getMedia()}`}/>
                    }
                </StyledLogo>
            </StyledLink>
    )
}

export default Logo
