import React from 'react'
import styled from 'styled-components';
import {media} from '../UI/media';

const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;

    & li{
        width: 49px;
		height: 49px;
		padding: 11px 12px;
		border: 3px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		box-sizing: border-box;
		text-align: center;
		cursor: pointer;
    }

    & li:last-child{
        padding-right: 8px;
    }

    & li:hover {
		border: 3px solid rgba(0,0,0,1);
	}

	& li:active {
		opacity: 0.2;
	}

	& li a {
		fill: #d22856;
	}
    
    ${media.tablet`
        flex-basis: 190px;
		margin: 5px 20px 0;
    `}
`;

const SocialList = (props) => {
    return (
        <StyledList
            tabIndex="0"
            aria-label="Наши социальные сети"
        >
            <li>
                <a
                    href="/#"
                    aria-label="twitter"
                >
                    <svg width="19" height="14">
                        <use xlinkHref="#icon-logo-twitter" />
                    </svg>
                </a>
            </li>
            <li>
                <a
                    href="/#" aria-label="facebook"
                >
                    <svg width="9" height="18">
                        <use xlinkHref="#icon-logo-facebook"/>
                    </svg>
                </a>
            </li>
            <li>
                <a
                    href="/#" aria-label="youtube"
                >
                    <svg width="15" height="13">
                        <use xlinkHref="#icon-logo-youtube"/>
                    </svg>
                </a>
            </li>
        </StyledList>
    )
}

export default SocialList
