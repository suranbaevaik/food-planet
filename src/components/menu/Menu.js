import React from "react";
import {NavLink} from "react-router-dom";
import menu from "../../constants/menu";
import MenuElement from "./MenuElement";
import listArrow from "../../assets/icons/list-arrow.svg";
import s from "./Menu.module.css";

const Menu = () => {

    const elements = menu.map((item, id) => {
        return <MenuElement
            key={id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
        />
    })

    return (
        <>
            <div className={s.nav_bar}>
                <h2 className={s.nav_title}>Меню</h2>
                <nav>
                    <ul className={s.list_menu}>
                        <li><NavLink to="#">Пицца</NavLink></li>
                        <li><NavLink to="#">Бургеры</NavLink></li>
                        <li><NavLink to="#">Суши</NavLink></li>
                        <li><NavLink to="#">Роллы</NavLink></li>
                        <li><NavLink to="#">Салаты</NavLink></li>
                        <li><NavLink to="#">Десерты</NavLink></li>
                        <li><NavLink to="#">Напитки</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className={s.sort_box}>
                <div>
                    <p>Сортировать  по:</p>
                </div>
                <div className={s.filter}>
                    <p>По умолчанию</p>
                    <img src={listArrow} alt="arrow"/>
                </div>
            </div>
            <div className={s.container}>
                {elements}
            </div>
            <div className={s.more_btn}>
                <button>Показать еще</button>
            </div>
        </>
    );
};

export default Menu;