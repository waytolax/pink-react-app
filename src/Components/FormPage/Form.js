import React from 'react'
import styled from 'styled-components';
import {media} from '../UI/media';
import {Button} from '../UI/Buttons';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    & fieldset{
        position: relative;
        margin: 0;
    }

    & legend {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        min-width: 220px;
        color: #d22856;
        line-height: 18px;
        text-transform: uppercase;
        text-align: center;
        margin: 0 auto;
    }

    & label{
        display: block;
        margin-left: 22px;
        margin-bottom: 5px;
        color: #d22856;
        line-height: 30px;
        text-transform: uppercase;
    }

    & input{
        padding: 14px 20px;
        margin-bottom: 20px;
        width: 100%;
        box-sizing: border-box;
        color: #283645;
        font-size: 18px;
        line-height: 30px;
        border: 2px solid #e5e5e5;
    }

    & input:hover {
        border-color: #283645;
        outline: none;
    }

    & input:focus {
        border-color: #d22856;
        outline: none;
    }

    & .info{
        padding: 0 20px 25px;
        border: none;
    }

    & .achieve,
    & .app {
        background-color: #f2f2f2;
        padding: 115px 20px 0;
        border: none;
    }

    & .achieve label,
    & .app label {
        position: relative;
        padding-left: 70px;
        margin-bottom: 52px;
        margin-left: 0;
        color: #283645;
        font-size: 18px;
        text-transform: none;
    }

    & .app {
        padding-top: 112px;
    }

    & .app label {
        margin-bottom: 45px;
    }

    & .achieve label::before,
    & .app label::before {
        content: '';
        position: absolute;
        left: 0;
        top: -2px;
        display: block;
        width: 35px;
        height: 35px;
        border: 2px solid #e5e5e5;
        background-color: #fff;
    }

    & .achieve label::after {
        content: '';
        display: none;
        position: absolute;
        bottom: 10px;
        left: 8px;
        width: 22px;
        height: 11px;
        border-bottom: 2px solid #d22856;
        border-left: 2px solid #d22856;
        transform: rotate(-45deg);
    }

    & .app label::before {
        border-radius: 50%;
    }

    & .app label::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 12px;
        display: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #d22856;
    }

    & .achieve input,
    & .app input {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }

    & .achieve input:checked + label::after,
    & .app input:checked + label::after {
        display: block;
    }

    & .achieve input:hover + label::before,
    & .app input:hover + label::before {
        border-color: #283645;
    }

    & .achieve input:active + label::before,
    & .achieve input:focus + label::before,
    & .app input:active + label::before,
    & .app input:focus + label::before {
        border-color: #d22856;
    }

    & .contact {
        padding: 30px 20px 25px;
        border: none;
    }

    & .contact legend {
        display: none;
    }

    & .review {
        padding: 75px 20px 38px;
        border: none;
    }

    & .review textarea {
        padding: 25px 20px;
        width: 100%;
        border: 2px solid #e5e5e5;
        box-sizing: border-box;
        color: #283645;
        font-size: 18px;
        line-height: 30px;
        resize: none;
    }

    ${media.tablet`
        & fieldset {
			margin: 0 20px 55px;
		}

		&& legend {
			display: block;
			position: static;
			transform: none;
			padding: 0 30px;
		}

        & fieldset:not(.info) {
			border: 2px solid #e5e5e5;
			background-color: #fff;
			padding: 45px 60px 15px;
		}

        & fieldset:not(.info) label {
			padding-left: 57px;
		}

		& .info {
			padding: 0;
			margin: 0 20px 5px;
		}

        & .info div {
			display: flex;
			margin-bottom: 35px;
		}

        & .info div:nth-child(2) label{
            margin-right: 58px;
        }

		& .info label {
			margin-top: 15px;
			margin-right: 18px;
			margin-left: 0;
		}

		& .app,
		& .info {
			order: -2;
		}

		&& .contact {
			order: -1;
			padding-top: 40px;
			padding-left: 55px;
			padding-bottom: 0;
		}

		& .contact div div {
			display: flex;
			flex-direction: column-reverse;
			margin-bottom: 25px;
		}

		& .contact input {
			margin-bottom: 12px;
			padding-right: 70px;
		}

		&& .contact label {
			position: relative;
			padding-left: 0;
		}

		& .contact label::before {
			content: '';
			position: absolute;
			top: -72px;
			right: 2px;
			height: 58px;
			width: 58px;
			background-color: #e5e5e5;
			background-image: url("../img/svg/icon-phone.svg");
			background-repeat: no-repeat;
			background-position: center;
		}

		& .contact label[for="email-adress"]::before{
			background-image: url("../img/svg/icon-mail.svg");
		}

		& .contact div div:hover label::before {
			background-size: 23px 23px;
		}

		& .contact div div:nth-of-type(2):hover label::before {
			background-size: 23px 18px;
		}

		&& .achieve {
			padding-bottom: 0;
		}

		&& .review {
			padding-top: 40px;
			padding-bottom: 40px;
			margin-bottom: 70px;
		}

		& .review textarea {
			padding: 15px 15px 25px;
		}
    `}

    ${media.desktop`
        flex-direction: row;
		flex-wrap: wrap;
		padding-left: 130px;
		padding-right: 130px;

		& legend {
			padding: 0 25px;
		}

		& .info {
            flex-grow: 0.3;
			flex-basis: 335px;
			margin: 15px auto 0 0;
		}

		&& .app {
            flex-grow: 0.3;
			padding: 50px 0;
			box-sizing: border-box;
			flex-basis: 335px;
			height: 310px;
			margin: 0;
		}

		& .app label {
			margin-left: 55px;
		}

		&& .contact {
			flex-grow: 1;
			margin: 0;
			padding-top: 35px;
		}

		& .contact div {
			display: flex;
			justify-content: space-between;
		}

		& .contact div div {
			flex-basis: 375px;
			margin-bottom: 5px;
		}

		&& .achieve {
			flex-grow: 1;
			margin: 60px 0 55px;
			padding: 0;
		}

		& .achieve div {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin: 45px 10px 10px 58px;
		}

		& .achieve label {
			flex-basis: 200px;
		}

		&& .review {
			width: 100%;
			margin: 0;
			padding-top: 35px;
		}

		& .review textarea {
			height: 125px;
			padding: 15px;
		}
    `}

    ${media.desktopL`
        & .info {
			flex-basis: 435px;
			margin: 15px auto 0 0;
		}

		&& .app {
			padding: 50px 0;
			box-sizing: border-box;
			flex-basis: 435px;
			height: 310px;
			margin: 0;
		}

		& .app label {
			margin-left: 75px;
		}
    `}
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;

    & p {
    margin: 35px 0 15px;
    color: #283645;
    line-height: 30px;
    text-transform: uppercase;
    text-align: center;
    }

    & p sup {
    color: #d22856;
    }

    ${media.tablet`
        flex-direction: row;
		justify-content: space-between;
        margin-bottom: 50px;
        margin-left: 20px;

        & p {
        margin-top: 20px;
        }
    `}

    ${media.desktop`
        flex-grow: 1;
		align-items: baseline;
        margin: 65px 0 0;
    `}
`;

const Form = (props) => {
    return (
        <StyledForm onSubmit={props.onSubmit}>
            <fieldset className='info'>
                <div>
                    <label htmlFor="last_name">фамилия:</label>
                    <input type="text" id="last_name" placeholder="Укажите фамилию *" required />
                </div>
                <div>
                    <label htmlFor="first_name">имя:</label>
                    <input type="text" id="first_name" placeholder="Введите ваше имя *" required />
                </div>
                <div>
                    <label htmlFor="middle_name">отчество:</label>
                    <input type="text" id="middle_name" placeholder="Ну и отчество тоже" />
                </div>
            </fieldset>

            <fieldset className="achieve">
                <legend tabIndex="0">Ваши безбашенные
                достижения в путешествии</legend>
                <div>
                    <input type="checkbox" id="achieve-01" defaultChecked />
                    <label htmlFor="achieve-01">Сделал селфи с акулой</label>
                    <input type="checkbox" id="achieve-02" defaultChecked />
                    <label htmlFor="achieve-02">Обгорел на пляже</label>
                    <input type="checkbox" id="achieve-03" />
                    <label htmlFor="achieve-03">Видел Чака Норриса</label>
                    <input type="checkbox" id="achieve-04" />
                    <label htmlFor="achieve-04">Накупил сувениров</label>
                    <input type="checkbox" id="achieve-05" defaultChecked />
                    <label htmlFor="achieve-05">Удержал башню</label>
                    <input type="checkbox" id="achieve-06" />
                    <label htmlFor="achieve-06">Разгромил отель</label>
                </div>
            </fieldset>

            <fieldset className="contact">
                <legend tabIndex="0">Контактная информация</legend>
                <div>
                    <div>
                        <label htmlFor="phone-number">Номер телефона</label>
                        <input type="tel" id="phone-number" placeholder="7-123-4567890" pattern="[0-9]{1}-[0-9]{3}-[0-9]{7}" />
                    </div>
                    <div>
                        <label htmlFor="email-adress">адрес почты</label>
                        <input type="email" id="email-adress" placeholder="Введите почту *" required />
                    </div>
                </div>
            </fieldset>

            <fieldset className="app">
                <legend tabIndex="0">С каким приложением путешествовали?</legend>
                <div>
                    <input type="radio" name="app" id="app-ios" defaultChecked />
                    <label htmlFor="app-ios">Pink для iOS</label>
                    <input type="radio" name="app" id="app-android" />
                    <label htmlFor="app-android">Pink на Android</label>
                    <input type="radio" name="app" id="app-win" />
                    <label htmlFor="app-win">Windows Phone</label>
                </div>
            </fieldset>

            <fieldset className="review">
                <legend tabIndex="0">Опишите свои эмоции</legend>
                <textarea rows="5" placeholder="Можно прям в красках, не стесняясь в выражениях"></textarea>
            </fieldset>

            <ButtonWrapper>
                <Button
                    type='submit'
                >Отправить форму</Button>
                <p tabIndex="0"><sup>*</sup> — обязательные поля</p>
            </ButtonWrapper>

        </StyledForm>
    )
}

export default Form
