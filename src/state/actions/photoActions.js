import {
    SET_ACTIVE,
    CHANGE_VALUE,
    SET_DEFAULT,
    UPDATE_IMAGE,
    SET_IMAGE_ERROR,
    SET_LIKE,
    SET_COMMENT,
    ADD_ARTICLE_SUCCESS,
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR,
} from '../constants/photo';
import firebase, {storage} from '../../firebase';
import axios from 'axios';

export function onLike(e) {
    return (dispatch, getState) => {
        e.preventDefault();
        const state = getState().photo;
        const current = e.target.id.slice(8);
        let articles = state.articles;
        return articles.map(article => {
            if (article.id === +current) {
                if (!article.liked) {
                    article.likes += 1;
                    article.liked = true;
                } else {
                    article.likes -= 1;
                    article.liked = false;
                }
            }
            return dispatch(setLike(articles));
        });
    };
}

function setLike(articles) {
    return {
        type: SET_LIKE,
        articles,
    };
}

export function onSetActive(e) {
    return (dispatch, getState) => {
        const current = e.target.id.slice(5);
        const types = ['brightness', 'saturate', 'contrast'];
        const state = getState().photo;
        let results;
            types.map(type => {
                results = {
                    [type]: {active: false, value: +state[type].value},
                    [current]: {active: true, value: +state[current].value},
                };
            return dispatch(setActive(results));
        });
    };
}

function setActive(results) {
    return {
        type: SET_ACTIVE,
        results,
    };
}

export function onChangeValue(e) {
    return (dispatch) => {
        onSetActive(e);
        const current = e.target.id.slice(5);
        const value = +e.target.value;
        dispatch(changeValue(current, value));
    };
}

function changeValue(currentInput, inputValue) {
    return {
        type: CHANGE_VALUE,
        currentInput,
        inputValue,
    };
}

export function onCancel(e) {
    return (dispatch) => {
        e.preventDefault();
        dispatch(setDefault());
    };
}

function setDefault() {
    return {
        type: SET_DEFAULT,
    };
}

export function onImageSelect (e) {
    return (dispatch) => {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];
        if (file) {
            if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp') {
                if (file.size < 4194304) {
                    reader.onloadend = () => {
                        return dispatch(updateImage(file, reader.result));
                    };
                    reader.readAsDataURL(file);
                } else {
                    return dispatch(setImageError());
                }
            } else {
                return dispatch(setImageError());
            }
        }
    };
}

function updateImage(file, url) {
    return {
        type: UPDATE_IMAGE,
        file,
        url,
    };
}

function setImageError() {
    return {
        type: SET_IMAGE_ERROR,
    };
}

export function onUpload(e) {
    return (dispatch, getState) => {
        e.preventDefault();
        dispatch(fetchArticlesStart());
        const state = getState().photo;
        const authState = getState().auth;

        const uploadTask = storage.ref(`images/${state.file.name}`).put(state.file);
        uploadTask.on('state_changed',
        (progress) => {
            const status = Math.round((progress.bytesTransferred / progress.totalBytes) * 100);
            console.log(status);
        }, (error) => {
            console.log(error);
        }, () => {
            storage.ref(`images`).child(state.file.name).getDownloadURL()
            .then((url) => {
                let styles = '';
                if (state.hasChanged) {
                    styles = `filter: brightness(${state.brightness.value}%) saturate(${state.saturate.value}%) contrast(${state.contrast.value}%);`;
                }
                const newArticle = {
                    best: false,
                    id: state.articles.length + 1,
                    image: url,
                    liked: false,
                    likes: 0,
                    name: authState.user.displayName || 'Аноним',
                    text: state.commentText,
                    time: Date.now(),
                    styles: styles,
                };
                return newArticle;
            })
            .then((newArticle) => {
                let newArticles = state.articles;
                newArticles.unshift(newArticle);

                try {
                    firebase.database().ref('articles').push(newArticle);
                } catch (e) {
                    dispatch(setImageError());
                }
                dispatch(setDefault());
                dispatch(addArticleSuccess(newArticles));
            })
            .then(() => {
                window.scrollTo(0, 750);
            });
        });
    };
}

function addArticleSuccess(newArticles) {
    return {
        type: ADD_ARTICLE_SUCCESS,
        newArticles,
    };
}

export function commentHandler(e) {
    return (dispatch) => {
        const text = e.target.value;
        text.length === 180
        ? e.target.style.color = 'red'
        : e.target.style.color = 'black';
        return dispatch(setComment(text));
    };
}

function setComment(text) {
    return {
        type: SET_COMMENT,
        text,
    };
}

export function fetchArticles() {
    return async dispatch => {
        dispatch(fetchArticlesStart());
        try {
            const res = await axios.get('https://pink-react-app.firebaseio.com/articles.json');
            let articles = [];
            Object.keys(res.data).forEach((key) => {
                articles.push(res.data[key]);
            });
            articles.reverse();
            dispatch(fetchArticlesSuccess(articles));
        } catch (error) {
            dispatch(fetchArticlesError(error));
        }
    };
}

function fetchArticlesStart() {
    return {
        type: FETCH_ARTICLES_START,
    };
}

function fetchArticlesSuccess(fetchedArticles) {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        fetchedArticles,
    };
}

function fetchArticlesError(fetchError) {
    return {
        type: FETCH_ARTICLES_ERROR,
        fetchError,
    };
}

function timeEndName(digit, type) {
    const lastFigure = digit % 10;
    if (digit >= 11 && digit < 15) {
        switch (type) {
            case 'day':
                return 'Дней';
            case 'hour':
                return 'Часов';
            case 'min':
                return 'Минут';
            default:
                return 'Секунд';
        }
    }
    else {
        if (lastFigure === 1) {
            switch (type) {
                case 'day':
                    return 'День';
                case 'hour':
                    return 'Час';
                case 'min':
                    return 'Минута';
                default:
                    return 'Секунда';
            }
        }
        if (lastFigure > 1 && lastFigure < 5) {
            switch (type) {
                case 'day':
                    return 'Дня';
                case 'hour':
                    return 'Часа';
                case 'min':
                    return 'Минуты';
                default:
                    return 'Секунды';
            }
        }
        if (lastFigure === 0 || lastFigure >= 5) {
            switch (type) {
                case 'day':
                    return 'Дней';
                case 'hour':
                    return 'Часов';
                case 'min':
                    return 'Минут';
                default:
                    return 'Секунд';
            }
        }
    }
}

export function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    // if (interval > 1) {
    //     return interval + " год";
    // }
    //
    // interval = Math.floor(seconds / 2592000);
    // if (interval > 1) {
    //     return interval + " месяц";
    // }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + ` ${timeEndName(interval, 'day')} назад`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + ` ${timeEndName(interval, 'hour')} назад`;
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + ` ${timeEndName(interval, 'min')} назад`;
    }

    return Math.floor(seconds) + ` ${timeEndName(seconds, 'sec')} назад`;
}
