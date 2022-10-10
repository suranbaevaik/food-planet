import React from "react";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import s from "./Trends.module.css";

const TrendElement = (props) => {
    return (
        <div className={s.trend_card}>
            <img className={s.burger_img} src={props.img}/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <span>{props.price}</span>
            <p><img className={s.minus} src={minus} alt=""/>
                1
                <img className={s.plus} src={plus} alt=""/>
            </p>
            <button className={s.btn}><a href="#">В корзину</a></button>
        </div>
    );
};

export default TrendElement;