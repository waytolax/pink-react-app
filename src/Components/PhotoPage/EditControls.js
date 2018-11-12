import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {media} from '../UI/media';
import InputRange from '../UI/InputRange';
import {RoundedButton} from '../UI/Buttons';
import {onSetActive, onChangeValue, onCancel, onUpload, commentHandler} from '../../state/actions/photoActions';

const StyledControls = styled.form `
    display: flex;
	flex-direction: column;

    & ul{
        position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 20px 65px;
		margin: 40px 0;
		border-bottom: 1px solid #dddfe0;
    }

    & label{
        cursor: pointer;
		opacity: 0.3;
    }

    & label:hover + input::-ms-thumb,
    & label:hover + input::-moz-range-thumb,
    & label:hover + input::-webkit-slider-thumb {
        background: #d22856;
    }

    & li.active label{
        opacity: ${props => props.file
    ? 1
    : 0.3};
		fill: ${props => props.file
        ? '#d22856'
        : undefined};
    }

    & li:not(.active) label:hover{
        opacity: ${props => props.file && 0.6}
    }

    & input{
        display: none;
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
    }

    & li.active input{
        display: block;
    }

    ${media.tablet `
        flex-grow: 1;
		margin-left: 45px;

        & ul{
            flex-direction: column;
			margin-top: 10px;
			margin-bottom: 25px;
			padding: 0;
			border: none;
        }

        & ul li{
            min-width: 41.7vw;
			display: flex;
			margin-bottom: 25px;
			padding-bottom: 20px;
			border-bottom: 1px solid #dddfe0;
        }

        & input{
            display: block;
			position: static;
			background-color: #f2f2f2;
			transform: none;
			width: 70% !important;
        }

        & svg{
            width: 22px;
			height: 22px;
			margin-right: 35px;
			fill: ${props => props.file && '#d22856'};
        }
    `}

    ${media.desktop `
        margin-left: 65px;

        & ul {
            margin-top: 0;
        }

        & ul li {
            min-width: 410px;
			padding-bottom: 5px;
			margin-bottom: 15px;
        }

        & label[for="edit-contrast"] {
			margin-left: 5px;
			margin-right: 8px;
		}

        & svg{
            width: auto;
			height: auto;
			margin-right: 45px;
        }
    `}
`;

const ButtonWrapper = styled.div `
    display: flex;
    flex-direction: column;

    ${media.desktop `
        flex-direction: row;
        margin: 0 auto;
    `}
`;

const StyledArea = styled.textarea `
  background-color: #f2f2f2;
  padding: 15px;
  margin-bottom: 40px;
  border-color: ${props => !props.disabled && '#d22856'};

    ${media.tablet`
        min-width: 41.7vw;
        margin: 0 auto 40px;
    `}

    ${media.desktop`
        min-width: 410px;
    `}
`;

function renderControls(props) {
    const controls = ['brightness', 'saturate', 'contrast'];

    return controls.map((control, index) => {
        return (
            <li
                key={index}
                className={props[control].active ? 'active' : undefined}
            >
                <label htmlFor={`edit-${control}`}>
                    <svg
                        width={control === 'contrast' ? "35" : "47"}
                        height={control === 'contrast' ? "35" : "47"}
                    >
                        <use xlinkHref={`#icon-editor-${control}`}/>
                    </svg>
                </label>

                <InputRange
                    id={`edit-${control}`}
                    onChange={props.onChangeValue}
                    onClick={props.onSetActive}
                    value={props[control].value}
                    disabled={!props.file}
                />

            </li>
        )
    })
}

const EditControls = (props) => {
    return (
        <StyledControls file={props.file}>
            <ul>
                {renderControls(props)}
            </ul>

            <StyledArea
                disabled={!props.file}
                onChange={props.commentHandler}
                rows="5"
                maxLength="180"
                placeholder={!props.file
                    ? "Добавьте фотографию"
                    : "Добавьте комментарий"}
                value={props.commentText}
            />

            <ButtonWrapper>
                <RoundedButton
                    onClick={props.onUpload}
                    disabled={!props.file}
                >Запостить</RoundedButton>
                <RoundedButton
                    onClick={props.onCancel}
                    disabled={!props.hasChanged}
                >Отмена</RoundedButton>
            </ButtonWrapper>
        </StyledControls>
    )
}

function mapStateToProps(state) {
    return {
        brightness: state.photo.brightness,
        saturate: state.photo.saturate,
        contrast: state.photo.contrast,
        hasChanged: state.photo.hasChanged,
        hasPhoto: state.photo.hasPhoto,
        file: state.photo.file,
        commentText: state.photo.commentText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetActive: (e) => dispatch(onSetActive(e)),
        onChangeValue: (e) => dispatch(onChangeValue(e)),
        onCancel: (e) => dispatch(onCancel(e)),
        onUpload: (e) => dispatch(onUpload(e)),
        commentHandler: (e) => dispatch(commentHandler(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditControls);
