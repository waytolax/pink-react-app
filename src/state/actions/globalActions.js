import {
    SET_BROWSER,
    SET_MEDIA,
} from '../constants/global';

export function getBrowser() {
    return dispatch => {
        let browser;
        if (!!window.chrome && !!window.chrome.webstore) {
            browser = 'chrome';
        }
        if ((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) {
            browser = 'ie';
        }
        dispatch(setBrowser(browser));
    };
}

function setBrowser(browser) {
    return {
        type: SET_BROWSER,
        browser,
    };
}

export function getMedia() {
    return dispatch => {
        let media = window.innerWidth < 660 ? 'mobile'
        : window.innerWidth >= 960 ? 'desktop'
        : 'tablet';
        dispatch(setMedia(media));
    };
}

function setMedia(media) {
    return {
        type: SET_MEDIA,
        media,
    };
}
