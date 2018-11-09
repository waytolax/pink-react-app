import React from 'react'
import styled from 'styled-components';
import {media} from '../UI/media'

const StyledCopyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    & b{
        margin-right: 15px;
		color: #283645;
		font-size: 14px;
		font-weight: 400;
		line-height: 18px;
    }
    & a{
        fill: #d22856;
    }
    & a:hover {
		fill: #000;
	}

	& a:active {
		opacity: 0.2;
	}

    ${media.tablet`
        margin-bottom: 0;
    `}
    ${media.desktop`
        & b {
    		margin-top: 3px;
    		font-size: 18px;
    	}

    	& a {
    		margin-top: 12px;
    	}
    `}

`;

const Copyright = (props) => {
    return (
        <StyledCopyright>
            <b tabIndex="0">
                Автор макета
            </b>
            <a
                aria-label="HTML Академия" href="https://htmlacademy.ru/intensive/adaptive"
                target='_blank'
                rel="noopener noreferrer"
            >
                <svg width="27" height="34">
                    <use xlinkHref="#icon-logo-htmlacademy"/>
                </svg>
            </a>
        </StyledCopyright>
    )
}

export default Copyright
