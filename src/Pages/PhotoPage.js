import React from 'react';
import { ReactComponent as PhotoPageSprite } from '../photo-sprite.svg';
import Header from '../Components/Header/Header';
import Gallery from '../Components/PhotoPage/Gallery';
import AddEditPhoto from '../Components/PhotoPage/AddEditPhoto';
import Footer from '../Components/Footer/Footer';

const PhotoPage = (props) => {
    return (
        <React.Fragment>
            <PhotoPageSprite style={{display:'none'}} />
            <Header />
            <Gallery />
            <AddEditPhoto />
            <Footer />
        </React.Fragment>
    );
};

export default PhotoPage;
