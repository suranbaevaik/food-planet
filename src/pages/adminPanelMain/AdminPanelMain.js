import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/icons/a-logo.svg';
import main from '../../assets/icons/a-main.svg';
import order from '../../assets/icons/a-ticket.svg';
import menu from '../../assets/icons/a-idea.svg';
import contact from '../../assets/icons/a-contact.svg';
import feedback from '../../assets/icons/a-profile.svg';
import employee from '../../assets/icons/a-book.svg';
import photo from '../../assets/icons/photo.svg';
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/new.svg';
import divider from '../../assets/icons/h-divider.svg';
import s from './AdminPanelMain.module.css';

const AdminPanelMain = () => {
    return (
        <div className={s.container}>
            <div className={s.side_box}>
                <header className={s.side_bar}>
                    <div className={s.logo_box}>
                        <img src={logo} alt=""/>
                        <h3>FOOD PLANET</h3>
                    </div>
                    <nav>
                        <ul className={s.nav_list}>
                            <li>
                                <NavLink to="#">
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
                                <NavLink to="#">
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
            <div className={s.main_box}>
                <div className={s.head_box}>
                    <h4>Главная</h4>
                    <img src={search} alt=""/>
                    <img src={notification} alt=""/>
                    <img src={divider} alt=""/>
                    <p>Jones Ferdinand</p>
                    <img src={photo} alt=""/>
                </div>
                <div className={s.menu_box}>
                    <div>
                        <h5>Пицца</h5>
                        <p>60</p>
                    </div>
                    <div>
                        <h5>Бургер</h5>
                        <p>16</p>
                    </div>
                    <div>
                        <h5>Суши</h5>
                        <p>43</p>
                    </div>
                    <div>
                        <h5>Роллы</h5>
                        <p>64</p>
                    </div>
                    <div>
                        <h5>Салаты</h5>
                        <p>60</p>
                    </div>
                    <div>
                        <h5>Десерты</h5>
                        <p>60</p>
                    </div>
                    <div>
                        <h5>Напитки</h5>
                        <p>43</p>
                    </div>
                    <div>
                        <h5>Роллы</h5>
                        <p>64</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelMain;