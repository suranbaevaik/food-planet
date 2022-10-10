import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import api from "../../constants/api";
import TrendElement from "./TrendElement";
import s from "./Trends.module.css";
import {useParams} from "react-router-dom";

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

    return (
        <>
            <div className={s.nav_bar}>
                <h2 className={s.nav_title}>Новинки</h2>
                <nav>
                    <ul className={s.list_trends}>
                        <li><Link to="/trends/pizza">Пицца</Link></li>
                        <li><Link to="/trends/burgers" element={<Trends/>}>Бургеры</Link></li>
                        <li><Link to="/trends/sushi">Суши</Link></li>
                        <li><Link to="/trends/rolls">Роллы</Link></li>
                        <li><Link to="/trends/salads">Салаты</Link></li>
                        <li><Link to="/trends/desserts">Десерты</Link></li>
                        <li><Link to="/trends/drinks">Напитки</Link></li>
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