import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {media} from '../UI/media';
import Logo from '../UI/Logo';
import SocialList from './SocialList';
import Copyright from './Copyright';

const StyledFooter = styled.footer`
    display: ${props => props.path === '/' ? 'none' : 'flex'};
    flex-direction: column;
    padding: 40px 70px;
    box-sizing: border-box;
    background-color: #fff;

    ${media.tablet`
        display: flex;
        flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 35px 20px 40px;
    `}
    ${media.desktop`
        padding: 70px 130px 75px;
    `}
`;

const Footer = (props) => {
    return (
        <StyledFooter path={props.match.path}>
            <Logo className='footer' />
            <SocialList />
            <Copyright />
        </StyledFooter>
    );
};

export default withRouter(Footer);
