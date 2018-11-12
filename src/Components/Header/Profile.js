import React from 'react';
import styled from 'styled-components';
import {media} from '../UI/media';

const StyledProfile = styled.div`
    display: none;
    position: absolute;
    right: 55px;
    top: 28px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    opacity: 1;
    z-index: 1;
    transition: opacity 1s;

    &.hide {
        opacity: 0;
        z-index: -1;
    }

    & span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        font-size: 28px;
        font-weight: bold;
        background-color: #d22856;
    }

    ${media.desktop`
        display: block;
    `}
`;

const getAbbr = (name) => {
    return name.charAt(0).toUpperCase();
};

const onClickHandler = (e) => {
    const target = e.currentTarget;
    target.classList.add('hide');
    setTimeout(() => {
        target.classList.remove('hide');
    }, 3000);
};

const Profile = (props) => {
    return (
        <StyledProfile
            onClick={onClickHandler}
        >
            {
                props.photo
                    ? <img src={props.photo} alt='Аватар пользователя'/>
                    : <span>{getAbbr(props.name)}</span>
            }
        </StyledProfile>
    );
};

export default Profile;
