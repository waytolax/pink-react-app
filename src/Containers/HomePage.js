import React from 'react'
import {connect} from 'react-redux';
import { ReactComponent as HomePageSprite } from '../index-sprite.svg'
import Header from '../Components/Header/Header';
import Advantages from '../Components/HomePage/Advantages';
import Research from '../Components/HomePage/Research';
import Reviews from '../Components/HomePage/Reviews'; //  animation='opacity/all/off (render)'
import Pricetable from '../Components/HomePage/Pricetable';
import Contact from '../Components/HomePage/Contact';
import MapContainer from '../Components/Map/MapContainer';
import Footer from '../Components/Footer/Footer';

const HomePage = (props) => {
    return (
        <React.Fragment>
            <HomePageSprite style={{display:'none'}} />
            <Header />
            <main>
                <Advantages />
                <Research />
                <Reviews animation={props.media !== 'desktop' ? 'off' : 'opacity'}/>
                <Pricetable />
                <Contact />
            </main>
            <MapContainer />
            <Footer />
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        media: state.globalReducer.media
    }
}

export default connect(mapStateToProps)(HomePage);
