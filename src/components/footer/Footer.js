import React from "react";
import footerLogo from "../../assets/icons/footer-logo.svg";
import telephone from "../../assets/icons/telefon.svg";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={s.footer_bar}>
            <img src={footerLogo} alt=""/>
            <nav>
                <ul className={s.list_items}>
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
                        <a href="tel:+996500405988">+996500405988</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;