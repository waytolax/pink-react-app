import React from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import Map from "./Map";
import {media} from '../UI/media';

const StyledMap = styled.section`
    height: 200px;
    width: 100%;
    background-color: #eae6dd;
    background-image: url('./img/mobile/bg-map-mobile@1x.png');
    background-image: ${props => props.webp
        ?
        `url("./img/mobile/bg-map-mobile@1x.webp")`
        :
        `url("./img/mobile/bg-map-mobile@1x.png")`
    };
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;

    ${media.tablet`
        height: 370px;
        background-image: ${props => props.webp
            ?
            `url("./img/tablet/bg-map-tablet@1x.webp")`
            :
            `./img/tablet/bg-map-tablet@1x.jpg")`
        };
    `}

    ${media.desktop`
        height: 500px;
    `}
`;

class MapContainer extends React.Component {

	render() {
		return (
			<Map
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBo7nbRM7ulYyRw6GbXPK4zpimYbddrBO0`}
				loadingElement={<div style={{ height: `100%`, display: 'none' }} />}
				containerElement={<StyledMap webp={this.props.browser === 'chrome'}/>}
				mapElement={<div style={{ height: `100%`}} />}
			/>
		);
	}
}

function mapStateToProps(state) {
    return {
        browser: state.global.browser,
    };
}

export default connect(mapStateToProps)(MapContainer);
