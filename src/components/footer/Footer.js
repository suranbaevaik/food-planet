import React from 'react';
import footerLogo from '../../assets/icons/footer-logo.svg';
import telephone from '../../assets/icons/telefon.svg';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer_bar}>
            <img src={footerLogo} alt=""/>
            <nav>
                <ul className={style.list_items}>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">Меню</a>
                    </li>
                    <li>
                        <a href="#">Доставка</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                    <li>
                        <img src={telephone} alt="phone"/>
                        <a href="#">+996500405988</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;