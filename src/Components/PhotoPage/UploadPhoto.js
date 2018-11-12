import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {media} from '../UI/media';
import Loader from '../UI/Loader';
import {onImageSelect} from '../../state/actions/photoActions';

const StyledLabel = styled.label`
    display: flex;
    height: 380px;
    justify-content: center;
    align-items: center;
    border: 1px dashed #d22856;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;

    & img{
        max-height: 100%;
        max-width: 100%;
        height: auto;
        width: auto;
        filter: ${props =>
            `brightness(${props.brightness.value || 100}%) saturate(${props.saturate.value || 100}%) contrast(${props.contrast.value || 100}%)`};
    }

    & div {
        margin: 0 auto;
        transform: none;
        left: 0;
    }

    & svg{
        margin-left: ${props => props.error ? '0' : '25px'};
        opacity: 0.3;
    }

    &:hover svg{
        opacity: 1;
    }

    ${media.tablet`
        height: 95%;
        width: ${props => props.loading ? '34vw' : undefined};

        & svg{
            width: 100%;
        }
    `}

    ${media.desktop`
        width: ${props => props.loading ? '14vw' : undefined};

        & img{
            width: 100%;
        }
    `}

    ${media.desktopL`
        width: ${props => props.loading ? '270px' : undefined};
    `}
`;

const UploadPhoto = (props) => {

    let {imagePreviewUrl} = props;
    let imagePreview = null;
    if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} alt='Загрузить фотографию' />);
    }

    return (

        <div>
            <StyledLabel
                htmlFor='file'
                brightness={props.brightness}
                saturate={props.saturate}
                contrast={props.contrast}
                error={props.error}
                loading={props.loading}
            >
                {
                    props.loading ? <Loader /> : props.error
                        ? <svg width="100" height="100">
                            <use xlinkHref="#icon-error" />
                        </svg>
                        : props.file ? imagePreview
                        : <svg width="100" height="100">
                            <use xlinkHref="#icon-upload" />
                        </svg>
                }

            </StyledLabel>

            <input type="file"
                id='file'
                onChange={props.onImageSelect}
                className='visually-hidden'
                accept='image/*'
            />

        </div>
    )
}

function mapStateToProps(state) {
    return {
        brightness: state.photo.brightness,
        saturate: state.photo.saturate,
        contrast: state.photo.contrast,
        file: state.photo.file,
        imagePreviewUrl: state.photo.imagePreviewUrl,
        error: state.photo.imageError,
        loading: state.photo.loading,
        isLogged: !!state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onImageSelect: (e) => dispatch(onImageSelect(e))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UploadPhoto);
