import React from 'react';
import { ReactComponent as FormPageSprite } from '../form-sprite.svg';
import Header from '../Components/Header/Header';
import Main from '../Components/FormPage/Main';
import Footer from '../Components/Footer/Footer';

const FormPage = (props) => {
    return (
        <React.Fragment>
            <FormPageSprite style={{display:'none'}} />
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    )
}

export default FormPage
