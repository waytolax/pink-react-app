import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {media} from '../UI/media';
import Separator from '../UI/Separator';

const StyledAdvs = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 285px;
    color: #000;
    text-align: center;
    background-color: #f2f2f2;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        min-width: 157px;
        min-height: 277px;
        background-image: ${props => props.webp
            ?
            `url("./img/mobile/iphone-screen-mobile@1x.webp")`
            :
            `url("./img/mobile/iphone-screen-mobile@1x.png")`
        };
        background-repeat: no-repeat;
    }
    & header {
        position: relative;
        width: 100%;
        padding: 40px 30px 0;
        box-sizing: border-box;
        background-color: #fff;
        color: #283645;
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;
    }
    & header p{
        margin-bottom: 30px;
        margin-top: 0;
    }
    & ul{
        display: flex;
        flex-direction: column;
        padding: 80px 30px 5px;
        line-height: 24px;
    }
    & ul li{
        margin-bottom: 35px;
    }
    & ul li h3{
        color: #000000;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        margin: 0;
    }
    & ul li p{
        color: #283645;
        font-size: 14px;
        font-weight: 400;
        margin: 12px 0 0;
    }

    ${media.tablet`
        padding: 0;

		&::before {
			left: 155px;
			min-width: 268px;
			min-height: 480px;
			background-image: ${props => props.webp
                ?
                `url("./img/tablet/iphone-screen-3-tablet@1x.webp")`
                :
                `url("./img/tablet/iphone-screen-3-tablet@1x.png")`
            };
		}

		& header {
			padding: 45px 30px 55px;
			font-size: 40px;
			line-height: 50px;
		}

		& header p {
			margin: 0;
		}

		& header p:nth-child(2) {
			padding: 0 17vw;
		}

		& ul {
			position: relative;
			min-width: 47%;
			padding: 65px 20px 5px 330px;
			text-align: left;
		}
    `}

    ${media.desktop`
        &::before {
			display: none;
		}

        & header {
			padding: 65px 12% 90px;
			font-size: 50px;
			line-height: 60px;
		}

        & ul {
			flex-direction: row;
			width: auto;
			justify-content: space-between;
			text-align: center;
			padding: 345px 13.3% 50px;
		}

        & ul li {
			position: relative;
			flex-basis: 240px;
			margin: 0;
		}

        & ul li::before {
			content: '';
			position: absolute;
			z-index: 2;
			top: -357px;
            left: 50%;
            transform: translateX(-50%);
			min-width: 186px;
			min-height: 301px;
			background-position: center;
		}

        & ul li:nth-child(1)::before {
			background-image: ${props => props.webp
                ?
                `url("./img/desktop/iphone-screen-1-desktop@1x.webp")`
                :
                `url("./img/desktop/iphone-screen-1-desktop@1x.png")`
            };
		}

		& ul li:nth-child(2)::before {
			background-image: ${props => props.webp
                ?
                `url("./img/desktop/iphone-screen-2-desktop@1x.webp")`
                :
                `url("./img/desktop/iphone-screen-2-desktop@1x.png")`
            };
		}

		& ul li:nth-child(3)::before {
			background-image: ${props => props.webp
                ?
                `url("./img/desktop/iphone-screen-3-desktop@1x.webp")`
                :
                `url("./img/desktop/iphone-screen-3-desktop@1x.png")`
            };
		}

        & ul li h3 {
			font-size: 30px;
			line-height: 36px;
		}

		& ul li p {
			font-size: 18px;
			line-height: 30px;
			margin-top: 25px;
		}
    `}
`;

const Advantages = (props) => {
    return (
        <StyledAdvs webp={props.browser === 'chrome'}>
            <h2
                className="visually-hidden"
                tabIndex="0"
            >Наши преимущества</h2>
            <header>
                <p>Устали от серости мегаполиса?</p>
                <p>Нам есть, что вам предложить!</p>
                <Separator />
            </header>
            <ul>
                <li tabIndex="0">
                    <h3>Поднимает настроение</h3>
                    <p>Приложение позволит вам победить осеннюю хандру и депрессию буквально в несколько кликов!</p>
                </li>
                <li tabIndex="0">
                    <h3>Меняет мир вокруг</h3>
                    <p> Сделайте снимок и украсьте его смайликом или текстовой подписью, чтобы усилить эффект</p>
                </li>
                <li tabIndex="0">
                    <h3>Заводит новых друзей</h3>
                    <p>Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и заводите новых</p>
                </li>
            </ul>
        </StyledAdvs>
    )
}

function mapStateToProps(state) {
    return {
        browser: state.globalReducer.browser
    }
}

export default connect(mapStateToProps)(Advantages);
