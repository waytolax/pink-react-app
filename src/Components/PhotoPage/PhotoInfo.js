import React from 'react';
import styled from 'styled-components';
import {media} from '../UI/media';
import LikeBtn from './LikeBtn';

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f2f2f2;

    &.best{
        margin-left: 20px;
        margin-right: 20px;
    }

    & cite {
        font-weight: 700;
        font-style: normal;
    }

    & cite span {
        font-size: 12px;
        font-weight: 300;
        text-transform: uppercase;
    }

    & p {
        margin-top: 3px;
        margin-bottom: 20px;
    }

    ${media.tablet`
        padding-top: 24px;
        padding-left: 27px;
        padding-bottom: 15px;
        min-height: 120px;

        &.best {
            flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
            min-height: 0;
        }

        & p {
            margin-bottom: auto;
        }

        &.best p{
            order: 1;
            margin-bottom: 0;
        }

        &.best cite {
            margin-right: 30vw;
        }

        &.best p {
            margin-bottom: 8px;
        }
    `}

    ${media.desktop`
        &.best {
            margin-left: 130px;
			margin-right: 130px;
        }
    `}
`;

const MAX_LENGTH = window.outerWidth < 660
? Math.round(window.outerWidth / 2)
: Math.round(window.outerWidth / 5);

const readMore = (text) => {
    if (text.length > MAX_LENGTH) {
        let last = text.substring(0, MAX_LENGTH).lastIndexOf(' ');
        text = text.substring(0, last).concat('...');
    }
    return text;
};

const PhotoInfo = (props) => {
    return (
        <StyledInfo
            tabIndex="0"
            className={props.className}
        >
            <cite>{props.name}&nbsp;
                <span>({props.time})</span>
            </cite>
            <p>{readMore(props.text)}</p>
            <LikeBtn
                id={props.id}
                className={props.className}
                likes={props.likes}
                liked={props.liked}
                onClick={props.onClick}
            />
        </StyledInfo>
    );
};

export default PhotoInfo;
