import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {media} from '../UI/media';
import PhotoInfo from './PhotoInfo';

const StyledArticle = styled.article`
    margin-bottom: 20px;
    width: 100%;

    &:last-child{
        margin-right: 0;
    }

    & img{
        display: block;
        ${props => props.styles ? `${props.styles}` : undefined}
    }

    &.best{
        position: relative;
    }

    &:not(.best){
        background: #f2f2f2;
    }

    &.best::before {
        content: "ПАНОРАМА ДНЯ";
        position: absolute;
        top: 0;
        right: 20px;
        padding: 5px 20px;
        background-color: #d22856;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
        text-align: center;
    }

    ${media.tablet`
        flex-basis: 300px;
        flex-grow: 1;

        &:nth-of-type(2n+1) {
			margin-right: 20px;
		}

        &:last-child{
            margin-right: 0px;
        }

        &.best::before {
			padding: 6px 20px;
			top: 58px;
		}
    `}

    ${media.desktop`
        &.best::before {
            top: 53px;
            right: 130px;
		}
    `}

    ${media.desktopL`
        margin-right: 20px;

        &:nth-of-type(3n+3) {
			margin-right: 0px;
		}

        &:last-child{
            flex-grow: 0;
            margin-right: 0px;
        }

        &:not(.best):not(:last-child) img{
        width: auto;
        height: 400px;
        max-width: 300px;
        margin: auto;
        }
    `}
`;

const Article = (props) => {
    return (
        <StyledArticle
            className={props.best ? 'best' : null}
            styles={props.styles}
        >
            <h2 className="visually-hidden">Пост</h2>
            <Link to={`/photo`}>
                <img src={props.image} alt="Фотография пользователя" />
            </Link>
            <PhotoInfo
                id={props.id}
                className={props.best ? 'best' : null}
                name={props.name}
                time={props.time}
                text={props.text}
                likes={props.likes}
                liked={props.liked}
                onClick={props.onClick}
            />
        </StyledArticle>
    );
};

export default Article;
