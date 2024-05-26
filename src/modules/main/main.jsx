import React from 'react';
import './main.css'
import About from "../../components/about/about";
import News from "../../components/news/news";
const Main = (props) => {
    const {
        text
    } = props


    return (
        <div className='main'>
            <About text={text}/>
            <News />
        </div>
    );
};

export default Main;