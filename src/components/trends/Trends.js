import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import api from "../../constants/api";
import TrendElement from "./TrendElement";
import s from "./Trends.module.css";

const Trends = () => {
    const params = useParams();
    const [trend, setTrend] = useState([]);

    const getTrends = () => {
        const url = api[params.trend_name];
        fetch(url)
            .then(response => response.json())
            .then(data => setTrend(data))
    }

    useEffect(() => {
        getTrends()
    }, [])

    const elements = trend.map((item, index) => {
        return <TrendElement
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
        />
    })

    const setActive = ({isActive}) => isActive ? 'active' : '';

    return (
        <>
            <div className={s.nav_bar}>
                <h2 className={s.nav_title}>Новинки</h2>
                <nav>
                    <ul className={s.list_trends}>
                        <li><NavLink to="/trends/pizza" className={setActive}>Пицца</NavLink></li>
                        <li><NavLink to="/trends/burgers" className={setActive}>Бургеры</NavLink></li>
                        <li><NavLink to="/trends/sushi" className={setActive}>Суши</NavLink></li>
                        <li><NavLink to="/trends/rolls" className={setActive}>Роллы</NavLink></li>
                        <li><NavLink to="/trends/salads" className={setActive}>Салаты</NavLink></li>
                        <li><NavLink to="/trends/desserts" className={setActive}>Десерты</NavLink></li>
                        <li><NavLink to="/trends/drinks" className={setActive}>Напитки</NavLink></li>
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