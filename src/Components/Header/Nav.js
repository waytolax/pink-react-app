import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {authLogout} from '../../state/actions/authActions';
import {media} from '../UI/media';
import Logo from '../UI/Logo';
import Profile from './Profile';

const StyledNav = styled.nav`
    display: none;

    & > a:last-child{
        display: none;
    }

    &.opened {
        display: block;
    }
    & ul{
        display: flex;
        flex-direction: column;
    }
    & li{
        padding: 15px 5px;
        border-top: 1px solid rgba(72, 84, 97, 1);
        border-bottom: 1px solid #000;
        background-color: #283645;
        text-align: center;
        font-weight: 700;
        line-height: 32px;
        text-transform: uppercase;
    }

    & li a{
        color: #ffffff;
    }

    & li a.active {
        border-bottom: 2px solid #fff;
    }

    & li a:not(.active):hover {
        color: #d22856;
    }

    & li a:not(.active):active {
        color: #d22856;
        opacity: 0.5;
    }

    ${media.desktop`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: absolute;
        top: 0;
        z-index: 1;
        width: 100%;
        box-sizing: border-box;
        padding: 26px 5% 43px 10.9%;
        background-color: rgba(0,0,0,0.3);

        & ul{
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-basis: 620px;
            padding-bottom: 3px;
        }
        & li{
            background: none;
            border: none;
            padding: 0;
            text-transform: none;
            font-size: 18px;
            font-weight: 400;
            line-height: 18px;
        }

        & li:last-child{
            display: none;
        }

        & > a:last-child{
            display: block;
            fill: #fff;
            margin-bottom: -10px;
            margin-left: 5vw;
        }

        & > a:last-child:hover{
            fill: #d22856;
        }

        & > a:last-child:active{
            opacity: 0.6;
        }
    `}
`;

const Nav = (props) => {
    return (
        <StyledNav className={props.className}>
            {
                props.className === 'closed' ? <Logo /> : null
            }
            <ul>
                <li>
                    <NavLink
                        to='/'
                        exact
                    >Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/photo'
                        exact
                    >Фотографии
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/form'
                        exact
                    >Конкурс
                    </NavLink>
                </li>
                <li>
                    <a
                        href="https://github.com/waytolax"
                        target='_blank'
                        rel="noopener noreferrer"
                    >GitHub</a>
                </li>
                {
                    props.isLogged
                        ? <li>
                            <Link
                                to={props.location.pathname}
                                onClick={props.authLogout}
                            >Выйти
                            </Link>
                        </li>
                        : <li>
                            <Link
                                to={{
                                    pathname: '/auth',
                                    state: { modal: true }
                                }}
                            >Войти
                            </Link>
                        </li>
                }

            </ul>
            {
                !props.isLogged
                    ? <Link
                        to={{
                            pathname: '/auth',
                            state: { modal: true }
                        }}
                        title='Войти'
                      >
                        <svg  width="40" height="40">
                            <use xlinkHref="#icon-login"/>
                        </svg>
                    </Link>
                    : <React.Fragment>
                        <Profile
                            photo={props.photoURL}
                            name={props.userName}
                        />
                        <Link
                            to={props.location.pathname}
                            onClick={props.authLogout}
                            title='Выйти'
                        >
                            <svg  width="40" height="40">
                                <use xlinkHref="#icon-logout"/>
                            </svg>
                        </Link>
                    </React.Fragment>
            }

        </StyledNav>
    )
}

function mapStateToProps(state) {
    return {
        isLogged: !!state.auth.user,
        userName: state.auth.user ? state.auth.user.displayName : null,
        photoURL: state.auth.user ? state.auth.user.photoURL : null
    }
}

const mapDispatchToProps = {
        authLogout,
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
