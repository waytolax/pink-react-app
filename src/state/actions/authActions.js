import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT,
} from '../constants/auth';
import firebase, { googleProvider, gitProvider } from '../../firebase';

export function auth(username, email, password, isLogin, history) {
    return async (dispatch) => {
        dispatch(authStart());
        try {
            if (!isLogin) {
                const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
                res.user.updateProfile({
                    displayName: username,
                });
                setTimeout(() => {
                    dispatch(authSuccess(res.user));
                }, 3000);
            } else {
                const res = await firebase.auth().signInWithEmailAndPassword(email, password);
                if (res.user.displayName !== username) {
                    throw new Error('Неверное имя пользователя');
                }
            }
            setTimeout(() => {
                history.goBack();
            }, 1000);
        } catch (e) {
            const errorMsg = e.code ? e.code.slice(5) : e.message;
            dispatch(authFailure(errorHandler(errorMsg)));
        }
    }
}

function errorHandler(error) {
    const errors = new Map([
         ['invalid-email', 'Неверно указан e-mail'],
         ['user-not-found', 'Указанный e-mail на найден'],
         ['wrong-password', 'Неверный пароль'],
         ['email-already-in-use', 'Указанный e-mail уже используется'],
         ['network-request-failed', 'Нет подключения к интернету'],
         ['operation-not-allowed', 'Произошла ошибка, попробуйте снова'],
         ['popup-closed-by-user', 'Окно авторизации закрыто пользователем'],
         ['account-exists-with-different-credential', 'Аккаунт уже существует с другими данными, используйте другой способ авторизации'],
    ]);
    return errors.get(error) || error;
}

function authStart() {
    return {
        type: AUTH_START,
    }
}

function authSuccess(user) {
    return {
        type: AUTH_SUCCESS,
        user,
    }
}

function authFailure(message) {
    firebase.auth().signOut();
    return {
        type: AUTH_FAILURE,
        message,
    }
}

export function autoLogin() {
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
                return user && dispatch(authSuccess(user));
            })
        }
    }

export function authLogout() {
    firebase.auth().signOut();
    return {
        type: AUTH_LOGOUT,
    }
}

export function signInProvider(e, history) {
    return async (dispatch) => {
        e.preventDefault();
        dispatch(authStart());

        const current = e.currentTarget.title.slice(16);
        let provider = googleProvider;
        if (current === 'GitHub') {
            provider = gitProvider;
        }
        try {
            const res = await firebase.auth().signInWithPopup(provider);
            dispatch(authSuccess(res.user));
            setTimeout(() => {
                history.goBack();
            }, 1000);
        } catch (e) {
            const errorMsg = e.code ? e.code.slice(5) : e.message;
            dispatch(authFailure(errorHandler(errorMsg)));
        }
    }
}
