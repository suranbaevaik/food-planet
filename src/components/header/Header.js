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
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
            <nav>
                <ul className={style.list_menu}>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Меню</NavLink>
                        <img src={arrow} alt="arrow"/>
                    </li>
                    <li>
                        <NavLink to="#">Доставка</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Контакты</NavLink>
                    </li>
                    <li>
                        <img src={phoneIcon} alt="phone-icon"/>
                        <NavLink to="#">+996500405988</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <img src={purchaseIcon} alt="purchase-icon"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;