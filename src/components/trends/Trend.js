import React from 'react';
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import style from "./Trends.module.css";

const Trend = (props) => {
    return (
        <div className={style.trend_card}>
                <img className={style.burger_img} src={props.img}/>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <span>{props.price}</span>
                <p><img className={style.minus} src={minus} alt="minus"/>
                    1
                    <img className={style.plus} src={plus} alt="plus"/>
                </p>
                <button className={style.btn}><a href="#">В корзину</a></button>
        </div>
    );
};

export default Trend;