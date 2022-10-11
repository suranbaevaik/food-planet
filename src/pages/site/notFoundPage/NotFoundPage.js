import React from "react";
import {Link} from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <div className={s.container}>
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <Link to="/">Перейти на главную</Link>
            </div>
            <Footer/>
        </>
    );
};

export default NotFoundPage;