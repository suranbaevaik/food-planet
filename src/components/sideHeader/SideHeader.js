import React from 'react';
import s from "./SideHeader.module.css";
import logo from "../../assets/icons/a-logo.svg";
import {NavLink} from "react-router-dom";
import main from "../../assets/icons/a-main.svg";
import order from "../../assets/icons/a-ticket.svg";
import menu from "../../assets/icons/a-idea.svg";
import contact from "../../assets/icons/a-contact.svg";
import feedback from "../../assets/icons/a-profile.svg";
import employee from "../../assets/icons/a-book.svg";

const SideHeader = () => {
    return (
        <div className={s.side_box}>
            <header className={s.side_bar}>
                <div className={s.logo_box}>
                    <img src={logo} alt=""/>
                    <h3>FOOD PLANET</h3>
                </div>
                <nav>
                    <ul className={s.nav_list}>
                        <li>
                            <NavLink to="/admin/main">
                                <img src={main} alt=""/>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <img src={order} alt=""/>
                                Заказы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/menu">
                                <img src={menu} alt=""/>
                                Меню
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <img src={contact} alt=""/>
                                Контакты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <img src={feedback} alt=""/>
                                Отзывы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <img src={employee} alt=""/>
                                Сотрудники
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr className={s.divider}/>
        </div>
    );
};

export default SideHeader;