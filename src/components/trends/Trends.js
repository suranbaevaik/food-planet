import React from "react";
import trends from "../../constants/trends";
import TrendElement from "./TrendElement";
import s from "./Trends.module.css";

const Trends = () => {
    const elements = trends.map((item) => {
        return <TrendElement
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
        />
    })

    return (
        <>
            <div className={s.nav_bar}>
                <h2 className={s.nav_title}>Новинки</h2>
                <nav>
                    <ul className={s.list_trends}>
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
            <div className={s.container}>
                {elements}
            </div>
        </>
    );
};

export default Trends;