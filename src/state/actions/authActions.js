import {AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT} from './actionTypes';
import firebase, { googleProvider, gitProvider } from '../../firebase';

export function auth(username, email, password, isLogin, history) {
    return async (dispatch) => {
        dispatch(authStart())
        let action = null;
        if (isLogin) {
            action = firebase.auth().signInWithEmailAndPassword(email, password);
        } else {
            action = firebase.auth().createUserWithEmailAndPassword(email, password);
        }

        try {
            const res = await action
            if (!isLogin) {
                res.user.updateProfile({
                    displayName: username
                })
            } else {
                if (res.user.displayName !== username) {
                    return dispatch(authFailure(errorHandler('Неверное имя пользователя')))
                }
                dispatch(authSuccess(res.user))
                setTimeout(() => {
                    history.goBack()
                }, 1000);
            }
        } catch (e) {
            let errorMsg = e.code ? e.code.slice(5) : e.message
            dispatch(authFailure(errorHandler(errorMsg)))
        }
    }
}

function errorHandler(e) {
    return e === 'invalid-email' ? 'Неверно указан e-mail'
    : e === 'user-not-found' ? 'Указанный e-mail на найден'
    : e === 'wrong-password' ? 'Неверный пароль'
    : e === 'email-already-in-use' ? 'Указанный e-mail уже используется'
    : e === 'network-request-failed' ? 'Нет подключения к интернету'
    : e === 'operation-not-allowed' ? 'Произошла ошибка, попробуйте снова'
    : e === 'popup-closed-by-user' ? 'Окно авторизации закрыто пользователем'
    : e === 'account-exists-with-different-credential' ? 'Аккаунт уже существует с другими данными, используйте другой способ авторизации'
    : e
}

function authStart() {
    return {
        type: AUTH_START
    }
}

function authSuccess(user) {
    return {
        type: AUTH_SUCCESS,
        user
    }
}

function authFailure(message) {
    return {
        type: AUTH_FAILURE,
        message
    }
}

export function autoLogin() {
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            user ? dispatch(authSuccess(user)) : dispatch(authLogout())
        })
        }
    }

export function authLogout() {
    firebase.auth().signOut()
    return {
        type: AUTH_LOGOUT
    }
}

export function signInProvider(e, history) {
    return async (dispatch) => {
        e.preventDefault();
        dispatch(authStart())

        const current = e.currentTarget.title.slice(16);
        let provider = googleProvider;
        if (current === 'GitHub') {
            provider = gitProvider
        }
        try {
            const res = await firebase.auth().signInWithPopup(provider)
            dispatch(authSuccess(res.user))
            setTimeout(() => {
                history.goBack()
            }, 1000);
        } catch (e) {
            let errorMsg = e.code ? e.code.slice(5) : e.message
            dispatch(authFailure(errorHandler(errorMsg)))
        }
    }
}
