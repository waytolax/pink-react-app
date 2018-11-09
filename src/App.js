import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import {connect} from 'react-redux';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import './css/normalize.css'
import './css/fonts.css'
import HomePage from './Containers/HomePage';
import FormPage from './Containers/FormPage';
import PhotoPage from './Containers/PhotoPage';
import AuthPopup from './Components/Auth/AuthPopup';
import {autoLogin} from './state/actions/authActions';
import {getBrowser, getMedia} from './state/actions/globalActions';

const GlobalStyle = createGlobalStyle`
    body {
        min-width: 320px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
        font-family: "Open Sans", "Arial", sans-serif;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
        background: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .visually-hidden {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }`

class App extends Component {

    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        if (
          nextProps.history.action !== "POP" &&
          (!location.state || !location.state.modal)
        ) {
          this.previousLocation = this.props.location;
        }
      }

      componentDidMount() {
          this.props.autoLogin()
          this.props.getBrowser()
          this.props.getMedia()
      }

  render() {
    let { location } = this.props;
    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (

        <React.Fragment>
            <GlobalStyle />
            <Switch location={isModal ? this.previousLocation : location}>
                <Route path="/" exact component={HomePage}/>
                <Route path="/photo" component={PhotoPage} />
                <Route path="/form" component={FormPage} />
                <Redirect to={'/'} />
            </Switch>
            {
                isModal
                ? <Route path="/auth" component={AuthPopup} />
                : null
            }
        </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin()),
        getBrowser: () => dispatch(getBrowser()),
        getMedia: () => dispatch(getMedia())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
