import React from 'react'
import styled from 'styled-components';
import Separator from '../UI/Separator';
import {media} from '../UI/media';

const StyledContact = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 45px 40px 25px;
    background-color: #fff;
    color: #283645;
    text-align: center;
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;

    & p {
        margin-bottom: 30px;
        margin-top: 0;
    }

    & ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    & ul li {
        margin-bottom: 15px;
    }

    & li b {
        display: block;
        font-size: 18px;
        font-weight: 700;
    }

    & li span {
        display: block;
        color: #d22856;
    }

    & span a {
        text-decoration: none;
        color: #d22856;
    }

    & li:not(:first-child) span a:hover {
        color: #253145;
        border-bottom: 2px solid #253145;
    }

    & span a:active {
        opacity: 0.3;
    }

    ${media.tablet`
        padding-left: 50px;
		padding-right: 50px;
		padding-bottom: 0;

		& p {
			font-size: 40px;
			line-height: 50px;
			margin-bottom: 40px;
		}

		& ul {
			flex-direction: row;
			justify-content: space-between;
		}

		& ul li {
			width: 240px;
			margin-bottom: 45px;
		}

		& ul li:last-child {
			margin: auto auto 35px;
		}
    `}
    ${media.desktop`
        padding: 65px 120px 20px;

		& p {
			font-size: 50px;
			line-height: 60px;
			margin-bottom: 55px;
		}

		& ul li{
			margin-bottom: 0;
		}

		& ul li:nth-child(2) {
			order: 1;
		}

		& ul li b{
			margin-bottom: 20px;
		}
    `}
`;

const Contact = (props) => {
    return (
        <StyledContact>
            <h2
                className="visually-hidden"
                tabIndex='0'
            >Контакты</h2>

            <p>Остались вопросы?<br/> Свяжитесь с нами!</p>

            <ul>
                <li>
                    <b tabIndex='0'>Звоните:</b>
                    <span><a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a>
                    </span>
                </li>
                <li>
                    <b tabIndex='0'>Пишите:</b>
                    <span><a href="mailto:waytolax@gmail.com?subject=Pink React App">waytolax@gmail.com</a>
                    </span>
                </li>
                <li tabIndex='0'>
                    <b>Приезжайте в гости:</b>
                    <span>Таиланд, Бангкок</span>
                </li>
            </ul>

            <Separator footer />
        </StyledContact>
    )
}

export default Contact
