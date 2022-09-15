import React from "react";
import delivery from "../../assets/icons/delivery.svg";
import food from "../../assets/icons/food.svg";
import menu from "../../assets/icons/menu.svg";
import location from "../../assets/icons/location.svg";
import s from "./Benefits.module.css";

const Benefits = () => {
    return (
        <div>
            <h2 className={s.title}>Почему выбирают нас:</h2>
            <div className={s.container}>
                <div>
                    <img src={delivery} alt=""/>
                    <h3>Мгновенная доставка</h3>
                    <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>
                <div>
                    <img src={food} alt=""/>
                    <h3>Свежие продукты</h3>
                    <p>Вся продукция хранится в хороших условиях тем самым продливая срок хранения</p>
                </div>
                <div>
                    <img src={menu} alt=""/>
                    <h3>Уникальное меню</h3>
                    <p>Ежедневно мы обновляем наше меню и том числе коктейльное</p>
                </div>
                <div>
                    <img src={location} alt=""/>
                    <h3>Доставка</h3>
                    <p>Мы быстро доставляем вашу еду по указанному адресу</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;