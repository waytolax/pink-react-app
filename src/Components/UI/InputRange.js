import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    -webkit-appearance: none;
    width: 90%;
    margin: 6.5px 0;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: #283645;
        border-radius: 25px;
        border: 0 solid #000001;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -6.5px;
        border: 2px solid #d22856;
        height: 15px;
        width: 14px;
        border-radius: 50px;
        background: #faffff;
        cursor: pointer;
    }

    &:disabled::-webkit-slider-thumb {
        color: rgba(0, 0, 0, 0.3);
        border-color: rgba(0, 0, 0, 0.3);
	}

    &:not(:disabled):focus::-webkit-slider-thumb,
    &:not(:disabled):hover::-webkit-slider-thumb {
        background: #d22856;
    }

    &:focus::-webkit-slider-runnable-track {
        background: #283645;
    }

    &::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: #283645;
        border-radius: 25px;
        border: 0 solid #000001;
    }

    &::-moz-range-thumb {
        border: 2px solid #d22856;
        height: 15px;
        width: 14px;
        border-radius: 50px;
        background: #faffff;
        cursor: pointer;
    }

    &:disabled::-moz-range-thumb {
        color: rgba(0, 0, 0, 0.3);
        border-color: rgba(0, 0, 0, 0.3);
	}

    &:not(:disabled):hover::-moz-range-thumb,
    &:not(:disabled):focus::-moz-range-thumb {
        background: #d22856;
    }

    &::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    &::-ms-fill-lower {
        background: #283645;
        border: 0 solid #000001;
        border-radius: 50px;
    }

    &::-ms-fill-upper {
        background: #283645;
        border: 0 solid #000001;
        border-radius: 50px;
    }

    &::-ms-thumb {
        border: 2px solid #d22856;
        height: 15px !important;
        width: 14px;
        border-radius: 50px;
        background: #faffff;
        cursor: pointer;
        height: 2px;
    }

    &:disabled::-ms-thumb  {
        color: rgba(0, 0, 0, 0.3);
        border-color: rgba(0, 0, 0, 0.3);
	}

    &:not(:disabled):hover::-ms-thumb,
    &:not(:disabled):focus::-ms-thumb {
        background: #d22856;
    }

    &:focus::-ms-fill-lower {
        background: #283645;
    }

    &:focus::-ms-fill-upper {
        background: #283645;
    }
`;

const InputRange = (props) => {
    return (
        <StyledInput
        onChange={props.onChange}
        onClick={props.onClick}
        type="range"
        min="50"
        max="150"
        id={props.id}
        value={props.value}
        disabled={props.disabled}
        />
    )
}

export default InputRange
