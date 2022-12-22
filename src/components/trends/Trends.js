import React, {useEffect, useState} from "react";
import api from "../../constants/api";
import TrendElement from "./TrendElement";
import s from "./Trends.module.css";

const Trends = () => {
    const [trend, setTrend] = useState([]);

    const changeTab = (e) => {
        const id = e.target.id
        fetch(api[id])
            .then(response => response.json())
            .then(data => setTrend(data))
    }

    useEffect(() => {
        if (trend.length >= 0){
            fetch(api.burgers)
                .then(response => response.json())
                .then(data => setTrend(data))
        }
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
                        <li><button onClick={changeTab} id="pizza">Пицца</button></li>
                        <li><button onClick={changeTab} id="burgers">Бургеры</button></li>
                        <li><button onClick={changeTab} id="sushi">Суши</button></li>
                        <li><button onClick={changeTab} id="rolls">Роллы</button></li>
                        <li><button onClick={changeTab} id="salads">Салаты</button></li>
                        <li><button onClick={changeTab} id="desserts">Десерты</button></li>
                        <li><button onClick={changeTab} id="drinks">Напитки</button></li>
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