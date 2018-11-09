import React, {Component} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {auth, signInProvider} from '../../state/actions/authActions';
import {media} from '../UI/media';
import {Button} from '../UI/Buttons';
import Overlay from '../UI/Overlay';
import Loader from '../UI/Loader';
import AuthInput from './AuthInput';

const StyledAuth = styled.div`
    display: flex;
    position: absolute;
    z-index: 11;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: #f2f2f2;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0,0,0, .5);
    line-height: 24px;

    & > div{
        margin-bottom: 33px;
    }

    & > button {
        align-self: flex-end;
        background-color: transparent;
        border: none;
        cursor: pointer;
        fill: #bdb5b5;
    }

    & > button:hover {
        opacity: 0.7;
        fill: #d22856;
    }

    & > button:active {
        opacity: 0.4;
    }

    & h2 {
        margin-bottom: 40px;
        color: #d22856;
        text-align: center;
        line-height: 35px;
    }

    ${media.tablet`
        width: 90%;
        padding: 40px;
    `}

    ${media.desktop`
        width: 80%;
    `}
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 50px;
    padding: 0 20px;

    & button {
        margin-bottom: 10px;
        padding: 15px 10px;
    }
`;

const SocialList = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 30px;

      & button{
          background-color: transparent;
          border: none;
          cursor: pointer;
      }

      & button:first-child{
          margin-right: 10px;
      }

      & button:hover{
          transform: scale(1.3);
          transition: all 0.5s;
      }
`;


function validateEmail(email) {
    var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateUser(name) {
    var re = /^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/;
    return re.test(String(name).toLowerCase());
}

class AuthPopup extends Component {

    state = {
        isFormValid: false,
        authInputs: {
            username: {
                value: '',
                type: 'text',
                label: 'имя пользователя',
                placeholder: 'Укажите имя пользователя',
                errorMsg: 'От 2 до 20 символов, латинские буквы и цифры',
                valid: false,
                changed: false,
                validation: {
                    required: true,
                    userName: true
                }
            },
            email: {
                value: '',
                type: 'email',
                label: 'адрес почты',
                placeholder: 'Введите почту',
                errorMsg: 'Введите корректный email',
                valid: false,
                changed: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                placeholder: 'Введите пароль',
                errorMsg: 'Минимум 6 символов',
                valid: false,
                changed: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    validateInput(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if (validation.userName) {
            isValid = validateUser(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    changeHandler = (event, inputName) => {
        const authInputs = this.state.authInputs;
        const input = this.state.authInputs[inputName];

        input.value = event.target.value;
        input.changed = true;
        input.valid = this.validateInput(input.value, input.validation);

        authInputs[inputName] = input;

        let isFormValid = true;
        Object.keys(authInputs).forEach(name => {
          isFormValid = authInputs[name].valid && isFormValid
        })
        this.setState({authInputs, isFormValid});
    }

    renderInputs (){
        return Object.keys(this.state.authInputs).map((inputName, index) => {
            const input = this.state.authInputs[inputName];
            return (
                <AuthInput
                    autoFocus={index === 0 ? true : false}
                    key={inputName + index}
                    id={`auth_${inputName}`}
                    value={input.value}
                    type={input.type}
                    label={input.label}
                    placeholder={input.placeholder}
                    errorMsg={input.errorMsg}
                    valid={input.valid}
                    changed={input.changed}
                    shouldValidate={!!input.validation}
                    onChange={(event) => {this.changeHandler(event, inputName)}}
                />
            )
        })
    }

    loginHandler = () => {
        this.props.auth(
            this.state.authInputs.username.value,
            this.state.authInputs.email.value,
            this.state.authInputs.password.value,
            true,
            this.props.history
        )
    }

    regHandler = () => {
        this.props.auth(
            this.state.authInputs.username.value,
            this.state.authInputs.email.value,
            this.state.authInputs.password.value,
            false
        )
    }

    onClose = () =>{
        this.props.history.goBack()
    }

    render () {
        return (
            <React.Fragment>
                <Overlay onClick={this.onClose}/>
                <StyledAuth>
                    <button
                        type="button"
                        onClick={this.onClose}
                    >
                        <svg width="25" height="24">
                            <use xlinkHref="#icon-menu-cross" />
                        </svg>
                    </button>

                    {
                        this.props.loading
                            ? <Loader />
                            : <h2>
                                {
                                    this.props.isLogged ? `Здравствуйте ${this.props.userName || ''}`
                                    : this.props.errorMsg || `Авторизация`
                                }
                            </h2>
                    }

                    <form>

                        { this.renderInputs() }

                        <ButtonWrapper>
                            <Button
                                onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}
                            >Войти</Button>
                            <Button
                                disabled={!this.state.isFormValid}
                                onClick={this.regHandler}
                            >Зарегистрироваться</Button>
                        </ButtonWrapper>

                        <SocialList>
                            <button
                                type="button"
                                onClick={(e) => this.props.signInProvider(e, this.props.history)}
                                title='Войти с помощью Google'
                            >
                                <svg width="50" height="50">
                                    <use xlinkHref="#icon-google" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={(e) => this.props.signInProvider(e, this.props.history)}
                                title='Войти с помощью GitHub'
                            >
                                <svg width="50" height="50">
                                    <use xlinkHref="#icon-github" />
                                </svg>
                            </button>
                        </SocialList>

                    </form>
                </StyledAuth>
                
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMsg: state.authReducer.errorMsg,
        isLogged: !!state.authReducer.user,
        userName: state.authReducer.user ? state.authReducer.user.displayName : null,
        loading: state.authReducer.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (username, email, password, isLogin, history) => dispatch(auth(username, email, password, isLogin, history)),
        signInProvider: (e, history) => dispatch(signInProvider(e, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPopup)
