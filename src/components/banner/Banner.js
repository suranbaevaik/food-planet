import React from 'react';
import burger from '../../assets/images/burger.png';
import arrow from '../../assets/icons/arrow.svg';
import style from './Banner.module.css';

const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.text_box}>
                <h1 className={style.title}>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                <p className={style.desc}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                <button className={style.btn}><a href="#">ПЕРЕЙТИ В МЕНЮ</a>
                    <img src={arrow} alt="arrow"/>
                </button>
            </div>
            <div className={style.img_box}>
                <img src={burger} alt="burger"/>
            </div>
        </div>
    );
};

export default Banner;