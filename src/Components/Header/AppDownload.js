import React from 'react';
import styled from 'styled-components';
import {media} from '../UI/media';

const StyledApp = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #1d2631;

    & p:first-of-type {
        display: none;
        padding: 0 50px;
        margin: 0;
        color: #ffffff;
        font-size: 40px;
        line-height: 48px;
        font-weight: 300;
        text-align: center;
    }
    & > a{
        padding: 15px 20px;
        margin: 30px 20px 18px;
        border: 3px solid #fff;
        border-radius: 35px;
        color: #ffffff;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
        white-space: nowrap;
    }
    & > a:hover {
        background-color: #fff;
        color: #d22856;
    }
    & > a:active {
        color: rgba(210, 40, 86, 0.3);
    }
    & ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 40px;
        align-items: baseline;
    }
    & ul li{
        margin: 10px auto;
    }
    & ul li:hover{
        transform: scale(1.1);
        transition: all 0.5s;
    }
    & p:last-child {
        margin: 10px 16px 30px;
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
    }

    ${media.tablet`
        position: absolute;
        bottom: 95px;
        background-color: transparent;
        width: 340px;

        & ul {
            margin: 0 50px;
        }

        & p:first-of-type {
            display: block;
        }

        & > a {
            margin-bottom: 38px;
        }

        & p:last-child {
            font-size: 18px;
            margin-top: 22px;
            margin-bottom: 17px;
        }
    `}

    ${media.desktop`
        left: 110px;
        top: 218px;

        & p:first-of-type {
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 20px;
        }
        & > a {
            font-size: 21px;
            margin-bottom: 60px;
        }
        & p:last-child {
            font-size: 18px;
            margin-top: 40px;
        }
    `}
`;

const AppDownload = (props) => {
    return (
        <StyledApp>
            <h2 className="visually-hidden">Скачать приложение</h2>
            <p>Взгляните на жизнь иначе!</p>
            <a href="https://github.com/waytolax"
            target='_blank'
            rel="noopener noreferrer"
            >Скачать приложение</a>
            <ul>
                <li>
                    <a href="/#" aria-label="скачать для Apple">
                        <svg width="47" height="56">
                            <use xlinkHref="#logo-apple"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/#" aria-label="скачать для Android">
                        <svg  width="43" height="47">
                            <use xlinkHref="#logo-android"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/#" aria-label="скачать для Windows">
                        <svg  width="44" height="41">
                            <use xlinkHref="#logo-microsoft"/>
                        </svg>
                    </a>
                </li>
            </ul>
            <p>Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8</p>
        </StyledApp>
    )
}

export default AppDownload
