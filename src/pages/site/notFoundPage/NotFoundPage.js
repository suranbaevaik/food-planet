import React from 'react';
import style from './NotFoundPage.module.css';
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <div className={style.container}>
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <a href="/">Перейти на главную</a>
            </div>
            <Footer/>
        </>
    );
};

export default NotFoundPage;