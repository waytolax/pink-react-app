import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import './css/normalize.css';
import './css/fonts.css';
import './css/global.css';
import HomePage from './Pages/HomePage';
import FormPage from './Pages/FormPage';
import PhotoPage from './Pages/PhotoPage';
import AuthPopup from './Components/Auth/AuthPopup';
import {autoLogin} from './state/actions/authActions';
import {getBrowser, getMedia} from './state/actions/globalActions';

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
          this.props.autoLogin();
          this.props.getBrowser();
          this.props.getMedia();
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

const mapDispatchToProps = {
        autoLogin,
        getBrowser,
        getMedia,
    }

export default withRouter(connect(null, mapDispatchToProps)(App));
