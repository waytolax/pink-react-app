import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.svg`
    position: absolute;
    left: 0;
    bottom: ${props => props.footer ? "-34px" : "-31px"};
    width: 100%;
    z-index: 1;
`;

const Separator = (props) => {
    return (
        <StyledSeparator
            height={props.footer ? "35" : "32"}
            footer={props.footer}
        >
            <use xlinkHref={props.footer
                ? "#bg-triangle-white-footer"
                : "#bg-triangle-white"}
            />
        </StyledSeparator>
    );
};

export default Separator;
