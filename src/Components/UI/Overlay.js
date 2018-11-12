import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div `
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, .4);
`;

const Overlay = (props) => {
    return (
        <StyledOverlay onClick={props.onClick}/>
    );
};

export default Overlay;
