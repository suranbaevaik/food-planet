import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../assets/icons/food-planet-logo.svg';
import phoneIcon from '../../assets/icons/phone-icon.svg';
import purchaseIcon from '../../assets/icons/purchase-icon.svg';
import arrow from '../../assets/icons/down-arrow.svg';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.menu_bar}>
            <img src={logo} alt="logo"/>
            <nav>
                <ul className={style.list_menu}>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Меню</NavLink>
                        <img src={arrow} alt="arrow"/>
                    </li>
                    <li>
                        <NavLink to="/delivery">Доставка</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Контакты</NavLink>
                    </li>
                    <li>
                        <img src={phoneIcon} alt="phone-icon"/>
                        <NavLink to="/contact">+996500405988</NavLink>
                    </li>
                    <li>
                        <img src={purchaseIcon} alt="purchase-icon"/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;