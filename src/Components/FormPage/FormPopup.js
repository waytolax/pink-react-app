import React from 'react'
import styled from 'styled-components';
import {Button} from '../UI/Buttons';
import {media} from '../UI/media';

const StyledPopup = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1880px;
    left: 0;
    right: 0;
    max-width: 980px;
    padding-top: 40px;
    padding-bottom: 5px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;

    & h2{
        color: #000000;
        font-size: 18px;
        font-weight: 700;
        margin: 0;
    }

    & p{
        color: #283645;
        line-height: 24px;
        margin: 30px 25px 40px;
    }

    & div{
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        padding-bottom: 15px;
        background-color: #f2f2f2;
    }

    ${media.tablet`
        top: 2270px;
        width: 70%;
		padding-top: 0;

        & h2 {
			font-size: 30px;
			line-height: 40px;
			margin: 40px 78px 0;
		}

		& p {
			font-size: 18px;
			margin-left: 75px;
			margin-right: 75px;
		}

		& div {
			padding: 50px 82px 55px;
		}
    `}

    ${media.desktop`
        top: 1320px;
        width: 80%;
    `}
`;

const Popup = (props) => {
    return (
        <StyledPopup>
            <h2 tabIndex="0">Ваша заявка отправлена</h2>
            <p tabIndex="0">Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим ее и
            оповестим вас.</p>
            <div>
                <Button
                    autoFocus
                    onClick={props.onClick}
                >ЗАКРЫТЬ ОКНО</Button>
            </div>
        </StyledPopup>
    )
}

export default Popup
