import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {media} from '../UI/media';

const StyledBackground = styled.div`
    position: relative;
    min-height: 460px;
    background-image: ${props => props.webp
        ?
        `url("./img/mobile/iphone-hand-mobile@2x.webp"),
        url("./img/mobile/bg-back-mobile@2x.webp")`
        :
        `url("./img/mobile/iphone-hand-mobile@2x.png"),
        url("./img/mobile/bg-back-mobile@2x.jpg")`
    };
    background-position: left 180px, center 0;
    background-size: auto 288px, auto 462px;
    background-repeat: no-repeat, no-repeat;

    &.opened{
        min-height: 395px;
        background-position: left 115px, center -70px;
    }

    &.photo,
    &.form{
        min-height: 240px;
        background-image: ${props => props.webp
            ?
            `url("./img/mobile/bg-back-mobile@2x.webp")`
            :
            `url("./img/mobile/bg-back-mobile@2x.jpg")`
        };
        background-repeat: no-repeat;
        background-position: center 0;
        background-size: auto 462px;
    }

    &.form.opened,
    &.photo.opened{
        background-position: center -70px;
        min-height: 170px;
    }

    &.photo::before,
    &.form::before{
        content: "Конкурс на самое безбашенное путешествие с Пинк";
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        min-width: 230px;
        font-size: 24px;
        font-weight: 300;
        line-height: 28px;
        text-align: center;
    }

    &.photo::before{
        content: "Фотографии пользователей";
        min-width: 170px;
    }

    &.form.opened::before,
    &.photo.opened::before{
        top: 32px;
    }

    ${media.tablet`
        min-height: 709px;
        background-image: ${props => props.webp
            ?
            `url("./img/tablet/iphone-hand-tablet@1x.webp"),
            url("./img/tablet/bg-back-tablet@1x.webp")`
            :
            `url("./img/tablet/iphone-hand-tablet@1x.png"),
            url("./img/tablet/bg-back-tablet@1x.jpg")`};
        background-size: auto 545px, auto 729px;
        background-position: center 164px, center 0px;

        &.opened{
            min-height: 618px;
            background-position: center 75px, center -110px;
        }

        &.photo,
        &.form{
            min-height: 440px;
            background-image: ${props => props.webp
                ?
                `url("./img/tablet/bg-back-tablet@1x.webp")`
                :
                `url("./img/tablet/bg-back-tablet@1x.jpg")`
            };
            background-size: auto 729px;
        }

        &.photo::before,
        &.form::before{
            top: 178px;
            font-size: 50px;
            line-height: 60px;
        }

        &.form::before{
            min-width: 500px;
        }

        &.form.opened,
        &.photo.opened{
            background-position: center -110px;
            min-height: 330px;
        }

        &.form.opened::before,
        &.photo.opened::before{
            top: 68px;
        }
    `}
    ${media.desktop`
        min-height: 853px;
        background-image: ${props => props.webp
            ?
            `url("./img/desktop/iphone-hand-desktop@1x.webp"), url("./img/desktop/bg-back-desktop@1x.webp")`
            :
            `url("./img/desktop/iphone-hand-desktop@1x.png"), url("./img/desktop/bg-back-desktop@1x.jpg")`};
        background-size: auto 645px, cover;
        background-position: right bottom, center;

        &.photo,
        &.form{
            min-height: 394px;
            background-image: ${props => props.webp
                ?
                `url("./img/desktop/bg-back-desktop@1x.webp")`
                :
                `url("./img/desktop/bg-back-desktop@1x.jpg")`
            };
            background-size: auto 853px;
        }

        &.photo::before,
        &.form::before{
            top: 172px;
        }

        &.form::before{
            min-width: 750px;
        }
    `}
`;


const Background = (props) => {
    let className = 'home';
    if (props.match.path !== '/') {
        className = props.match.path.slice(1);
    }
    return (
        <StyledBackground
            webp={props.browser === 'chrome'}
            className={`${props.className} ${className}`}
        />
    );
};

function mapStateToProps(state) {
    return {
        browser: state.global.browser,
    };
}

export default withRouter(connect(mapStateToProps)(Background));
