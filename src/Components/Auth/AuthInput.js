import React from 'react';
import styled from 'styled-components';
import {media} from '../UI/media';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 25px;

    &.invalid input{
        border-color: #d22856;
    }

    &:not(.invalid) label{
        color: ${props => props.changed ? '#2aab6d' : '#d22856'};
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
        margin-bottom: 5px;
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

    ${media.tablet`
        & input {
            margin-bottom: 8px;
            padding-right: 70px;
        }
    `}

    & span{
        font-size: 12px;
        font-weight: bold;
        color: #d22856;
    }
`;


const AuthInput = (props) => {

    function isInvalid({valid, changed, shouldValidate}) {
        return !valid && shouldValidate && changed;
    }

    return (
        <Wrapper
            className={isInvalid(props) ? 'invalid' : undefined}
            changed={props.changed}
        >
            <label
                htmlFor={props.id}
            >{isInvalid(props)
                ? props.errorMsg
                : props.label}
            </label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                autoFocus={props.autoFocus}
            />
        </Wrapper>
    );
};

export default AuthInput;
