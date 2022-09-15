import React from "react";
import {NavLink} from "react-router-dom";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/new.svg";
import divider from "../../assets/icons/h-divider.svg";
import photo from "../../assets/icons/photo.svg";
import s from "./AdminMainContent.module.css";

const AdminMainContent = () => {
    return (
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
                <NavLink to="/admin/menu/burgers">
                    <div>
                        <h5>Бургер</h5>
                        <p>16</p>
                    </div>
                </NavLink>
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
    );
};

export default AdminMainContent;