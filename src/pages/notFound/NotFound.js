import React from 'react';
import style from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={style.container}>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <a href="/">Перейти на главную</a>
        </div>
    );
};

export default NotFound;