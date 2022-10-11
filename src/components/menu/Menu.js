import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import api from "../../constants/api";
import MenuElement from "./MenuElement";
import listArrow from "../../assets/icons/list-arrow.svg";
import s from "./Menu.module.css";

const Menu = () => {
    const params = useParams();
    const [menuItem, setMenuItem] = useState([]);

    const getMenu = () => {
        const url = api[params.menu_item];
        fetch(url)
            .then(response => response.json())
            .then(data => setMenuItem(data))
    }

    useEffect(() => {
        getMenu()
    }, [])

    const elements = menuItem.map((item, index) => {
        return <MenuElement
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
                <h2 className={s.nav_title}>Меню</h2>
                <nav>
                    <ul className={s.list_menu}>
                        <li><NavLink to="/menu/pizza">Пицца</NavLink></li>
                        <li><NavLink to="/menu/burgers">Бургеры</NavLink></li>
                        <li><NavLink to="/menu/sushi">Суши</NavLink></li>
                        <li><NavLink to="/menu/rolls">Роллы</NavLink></li>
                        <li><NavLink to="/menu/salads">Салаты</NavLink></li>
                        <li><NavLink to="/menu/desserts">Десерты</NavLink></li>
                        <li><NavLink to="/menu/drinks">Напитки</NavLink></li>
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