import React from 'react';
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import style from "./Menu.module.css";

const MenuElement = (props) => {
    return (
        <div className={style.menu_card}>
            <img className={style.pizza_img} src={props.img}/>
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

export default MenuElement;