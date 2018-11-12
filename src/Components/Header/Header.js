import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import NavToggle from './NavToggle';
import Nav from './Nav';
import Background from './Background';
import AppDownload from './AppDownload';

const StyledHeader = styled.header`
    position: relative;
    background-color: #283645;
`;

class Header extends Component {

    state = {
        menu: "closed",
    }

    onToggleHandler = () => {
        if (this.state.menu === "closed") {
            this.setState({
                menu: "opened",
            });
        } else {
            this.setState({
                menu: "closed",
            });
        }
    }

  render() {
    return (
        <StyledHeader>
            <h1 className='visually-hidden'>
                Приложение поднимающее настроение
            </h1>
            <NavToggle
                className={this.state.menu}
                onToggleHandler={this.onToggleHandler}
            />
            <Nav className={this.state.menu} />
            <Background className={this.state.menu} />

            { this.props.match.path === '/' && <AppDownload /> }

        </StyledHeader>
        );
    };
};

export default withRouter(Header);
