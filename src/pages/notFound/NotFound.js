import React from 'react';
import style from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={style.container}>
            <h1>Ошибка 404</h1>
            <h2>Страница не найдена</h2>
        </div>
    );
};

export default NotFound;