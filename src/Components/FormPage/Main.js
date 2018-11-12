import React, {Component} from 'react';
import styled from 'styled-components';
import {media} from '../UI/media';
import Form from './Form';
import FormPopup from './FormPopup';

const StyledMain = styled.main`
    font-size: 14px;
    font-weight: 400;

    & > p:first-of-type {
        text-align: center;
        margin: 0 auto;
        padding: 45px 20px 35px;
        color: #283645;
        line-height: 30px;
    }

    & > p span {
        display: none;
    }

    ${media.tablet`
        & > p:first-of-type {
            padding: 92px 50px 72px;
			font-size: 18px;
        }

        & > p span {
            display: block;
        }
    `}

    ${media.desktop`
        & > p:first-of-type {
            padding: 92px 215px 70px;
        }

        & > p span {
            display: inline;
        }
    `}

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active),  {
        overflow-x: hidden;

        & .app,
        & .achieve,
        & .contact {
            display: block;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }

        & .info {
            margin-right: 20px;
        }

        & .contact label::before{
            display: none;
        }
    }

    @supports (-ms-ime-align:auto) and (-webkit-text-stroke:initial) {

        & .app,
        & .achieve,
        & .contact {
            display: block;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }

        & .info {
            margin-right: 20px;
        }
    }
`;

class Main extends Component {

    state = {
        status: null
    }

    onSubmitHandler = (event) => {
        event.preventDefault(event);
        this.setState({
            status: 'success'
        });
    }

    onCloseHandler = () => {
        this.setState({
            status: null
        });
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1000);
    }

    render () {
        return (
            <StyledMain>
                <h1 className="visually-hidden" tabIndex="0">Форма для участия в конкурсе</h1>
                <p tabIndex="0">Поделитесь своей историей и получите шанс выиграть ценный приз — 1000 миль на вашу бонусную карту! <span>Пожалуйста, заполните форму ниже:</span></p>

                <Form onSubmit={this.onSubmitHandler}/>

                {
                    this.state.status === 'success'
                        ? <FormPopup
                            onClick={this.onCloseHandler} />
                        : null
                }

            </StyledMain>
        );
    };
};

export default Main;
