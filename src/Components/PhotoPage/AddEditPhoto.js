import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {media} from '../UI/media';
import EditControls from './EditControls';
import UploadPhoto from './UploadPhoto';

const StyledSection = styled.section`

    & > p {
        margin: 25px 30px 42px 25px;
		color: #283645;
		font-size: 14px;
		font-weight: 400;
		line-height: 30px;
		text-align: center;
    }

    ${media.tablet`
        padding-left: 20px;
        padding-right: 20px;

        & > p {
            margin: 45px 30px 70px;
			font-size: 18px;
        }
    `}

    ${media.desktop`
        padding-left: 130px;
        padding-right: 130px;

		& > p {
			margin-top: 45px;
			margin-bottom: 65px;
		}
    `}
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 20px;
    background-color: #f2f2f2;

    & > a{
        margin: 0 auto;
        font-size: 18px;
        color: #d22856;
        text-align: center;
        line-height: 32px;
        text-decoration: underline;
        cursor: pointer;
    }

    & > p {
        color: #d22856;
        margin: 0 auto;
    }

    ${media.tablet`
        flex-direction: row;
		padding-top: 30px;
        padding-bottom: 30px
		padding-left: 20px;
		padding-right: 20px;
    `}

    ${media.desktop`
        padding-left: 40px;
		padding-right: 40px;
        padding-top: 55px;
		padding-bottom: 55px;
        margin-bottom: 30px;
    `}

    ${media.desktopL`
        padding-left: 80px;
		padding-right: 80px;
    `}
`;

const AddPhoto = (props) => {
    return (
        <StyledSection>
            <h2 className="visually-hidden" tabIndex="0"
            >Добавить фотографию</h2>
            <p>Затмите их всех!<br/> Выкладывайте все, что накопилось в телефоне!</p>


            <StyledWrapper>
                {
                    props.isIe
                        ? <p>К сожалению Ваш браузер не поддерживает данную функцию</p>
                        : !props.isLogged
                            ? <Link
                                to={{
                                        pathname: '/auth',
                                    state: { modal: true }
                                }}
                              >Пожалуйста, авторизуйтесь чтобы добавлять фотографии
                            </Link>
                            : <React.Fragment>
                                <UploadPhoto />
                                <EditControls />
                            </React.Fragment>
                }

            </StyledWrapper>



        </StyledSection>
    )
}

function mapStateToProps(state) {
    return {
        isLogged: !!state.authReducer.user,
        isIe: state.globalReducer.browser === 'ie' ? true : false
    }
}

export default connect(mapStateToProps)(AddPhoto);
