import React from 'react';
import './homepage.css'
import Header from "../../components/header/header";
import Main from "../../modules/main/main";
import Footer from "../../components/footer/footer";

const Homepage = () => {
    let hello = 'привет мир'

    return (
        <div className='TEST2'>
            <Header />
            <Main text={hello}/>
            <Footer />
        </div>

    );
};

export default Homepage;