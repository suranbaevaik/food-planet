import React from "react";
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