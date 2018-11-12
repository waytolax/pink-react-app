import React from 'react';
import styled from 'styled-components';
import {media} from '../UI/media';

const StyledResearch = styled.section`
    display: none;
    position: relative;
    padding: 95px 30px 85px 330px;
    background-image: url("./img/svg/icon-timer.svg");
    background-repeat: no-repeat;
    background-size: 238px auto;
    background-position: 20px 60px;
    background-color: #f2f2f2;

    &::before {
        content: '24';
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 38px;
        top: 116px;
        box-sizing: border-box;
        width: 202px;
        height: 202px;
        padding-bottom: 10px;
        border: 14px solid #d22856;
        border-radius: 50%;
        color: #d22856;
        font-size: 96px;
        font-weight: 700;
        line-height: 150px;
    }

    & h2 {
        color: #000000;
        font-size: 30px;
        font-weight: 700;
        line-height: 36px;
        margin: 0;
    }

    & p {
        font-size: 14px;
        line-height: 24px;
        color: #283645;
        font-weight: 400;
        margin: 10px 0;
    }

    & a {
        font-size: 14px;
        line-height: 24px;
        color: #d22856;
        font-weight: 400;
        text-decoration: underline;
    }

    ${media.tablet`
        display: flex;
        flex-direction: column;
    `}

    ${media.desktop`
        padding: 110px 85px 115px 495px;
        background-color: #f2f2f2;
        background-size: 298px auto;
        background-position: 130px 15px;

        &::before {
            width: 253px;
            height: 253px;
            left: 152px;
            top: 85px;
            font-size: 120px;
            border-width: 16px;
        }

        & h2 {
            line-height: 30px;
            margin-bottom: 12px;
        }

        & h2 br {
            display: none;
        }

        & p {
            font-size: 18px;
            margin-bottom: 35px;
            line-height: 30px;
        }

        & a {
            font-size: 18px;
        }
    `}
`;

const Research = (props) => {
    return (
        <StyledResearch tabIndex="0">
            <h2>
                Эффект&nbsp;<br/> на 24 часа!
            </h2>
            <p>
                Британские ученые провели исcледования и доказали, что положительный эффект от использования приложения длится целые сутки!
            </p>
            <a href="/">Узнать больше об исcледовании</a>
        </StyledResearch>
    );
};

export default Research;
