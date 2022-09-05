import React from 'react';
import trends from '../../constants/trends';
import Trend from "./Trend";
import style from './Trends.module.css';

const Trends = () => {
    const elements = trends.map((item, id) => {
        return <Trend
            key={id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
        />
    })

    return (
        <>
            <div className={style.nav_bar}>
                <h2 className={style.nav_title}>Новинки</h2>
                <nav>
                    <ul className={style.list_trends}>
                        <li><a href="#">Пицца</a></li>
                        <li><a href="#">Бургеры</a></li>
                        <li><a href="#">Суши</a></li>
                        <li><a href="#">Роллы</a></li>
                        <li><a href="#">Салаты</a></li>
                        <li><a href="#">Десерты</a></li>
                        <li><a href="#">Напитки</a></li>
                    </ul>
                </nav>
            </div>
            <div className={style.container}>
                {elements}
            </div>
        </>
    );
};

export default Trends;