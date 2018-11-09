import React, {Component} from 'react'
import styled from 'styled-components';
import {media} from '../UI/media';
import {Controls} from '../UI/Controls';

const Wrapper = styled.section`
    background-color: #f2f2f2;
    padding: 90px 0 35px;

    ${media.tablet`
        padding-top: 72px;
		padding-bottom: 70px;
    `}
    ${media.desktop`
        padding: 140px 0 95px;
    `}
`;

const StyledTable = styled.table`
    display: flex;
    position: relative;
    min-height: 285px;
    margin-bottom: 45px;
    border-collapse: collapse;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;

    & tbody {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.5s;
    }

    & tbody.left{
        transform: translateX(-16%);
    }

    & tbody.right{
        transform: translateX(-83%);
    }

    & tr:nth-child(2) td {
        border-top: none;
    }

    & tr th:nth-child(2),
    & tr th:nth-child(3) {
        border-right: 2px solid #e5e5e5;
    }

    & tr th:nth-child(1),
    & tr th:nth-child(4) {
        border-right: 2px solid #283645;
    }

    & tr td:first-child,
    & tr th:first-child {
        display: none;
        text-transform: none;
        text-align: left;
    }

    & th:not(:first-child) {
        padding: 20px 90px;
        background-color: #283645;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
    }

    & td {
        padding: 15px 20px 15px 25px;
        background-color: #fff;
        border: 2px solid #e5e5e5;
        color: #283645;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
    }

    & td svg {
        float: right;
    }

    & th span {
        display: block;
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;
    }

    & th:nth-of-type(3) {
        position: relative;
        overflow: hidden;
    }

    & th:nth-of-type(3)::before {
        content: "Хит";
        position: absolute;
        left: -116px;
        top: 15px;
        width: 100%;
        background-color: #d22856;
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        transform: rotate(-45deg);
    }

    ${media.tablet`
        min-height: 225px;
		margin-bottom: 0;

        && tbody {
            transform: translateX(-50%);
        }

        & td span,
        & + div{
            display:none;
        }

        & tr td:first-child,
		& tr th:first-child {
			display: table-cell;
			padding: 8px 25px 8px 14px;
		}
        & th:not(:first-child) {
            font-size: 16px;
            padding: 10px 38px;
        }

        & th span {
            font-size: 18px;
            line-height: 24px;
        }
        & th:nth-child(3) {
            padding: 12px 34px;
        }
        & th:nth-of-type(3)::before{
            left: -56px;
            top: 4px;
            font-size: 14px;
            line-height: 28px;
        }
		& td {
			padding: 7px 20px;
		}
        & td svg {
            display: block;
            margin: 0 auto;
            float: none;
        }
    `}

    ${media.desktop`
        min-height: 280px;

        & th span {
            font-size: 24px;
			line-height: 30px;
        }
        & th:nth-of-type(3)::before{
            left: -90px;
			top: 20px;
			font-size: 10px;
			line-height: 21px;
        }

        & tr td:first-child,
		& tr th:first-child {
			padding: 15px 67px 15px 20px;
		}

		& td {
			font-size: 18px;
			padding: 8px 15px;
		}

		& th:not(:first-child) {
			font-size: 18px;
			line-height: 30px;
			padding: 18px 66px 20px;
		}
    `}

`;

class Pricetable extends Component {

    state = {
        position: null
    }

    onChangeHandler = (event) => {
       const id = event.target.id.slice(6)
       let position = null
       id === '1'
       ? position = 'left'
       : id === '3'
       ? position = 'right'
       : position = null

       this.setState({
           position
       });
    }

    render () {
        return (
            <Wrapper>
                <h2 className="visually-hidden" tabIndex="0">Цены</h2>
                <StyledTable>
                    <tbody className={this.state.position}>
                        <tr>
                            <th/>
                            <th>База<span>1,99 USD</span></th>
                            <th tabIndex="0" >Стандарт<span>3,99 USD</span></th>
                            <th>Анлим<span>9,99 USD</span></th>
                        </tr>
                        <tr>
                            <td>Розовый фильтр</td>
                            <td>
                                <span>Розовый фильтр</span>
                                <svg width="30" height="25">
                                    <use xlinkHref="#icon-yes"/>
                                </svg>
                            </td>
                            <td>
                                <span>Розовый фильтр</span>
                                <svg width="30" height="25">
                                    <use xlinkHref="#icon-yes"/>
                                </svg>
                            </td>
                            <td>
                                <span>Розовый фильтр</span>
                                <svg width="30" height="25">
                                    <use xlinkHref="#icon-yes"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Смайлики</td>
                            <td>
                                <span>Смайлики</span>
                                <svg width="28" height="28">
                                    <use xlinkHref="#icon-no"/>
                                </svg>
                            </td>
                            <td>
                                <span>Смайлики</span>
                                <svg width="30" height="25">
                                    <use xlinkHref="#icon-yes"/>
                                </svg>
                            </td>
                            <td>
                                <span>Смайлики</span>
                                <svg width="30" height="25">
                                    <use xlinkHref="#icon-yes"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Комментарии</td>
                            <td>
                                <span>Комментарии</span>
                                <svg width="28" height="28">
                                    <use xlinkHref="#icon-no"/>
                                </svg>
                            </td>
                            <td>
                                <span>Комментарии</span>
                                <svg width="28" height="28">
                                    <use xlinkHref="#icon-no"/>
                                </svg>
                            </td>
                            <td>
                                <span>Комментарии</span>
                                <svg width="30" height="25">
                                    <use xlinkHref="#icon-yes"/>
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </StyledTable>
                <Controls
                type='table'
                onChange={this.onChangeHandler}
                />
            </Wrapper>
        )
    }
}

export default Pricetable
