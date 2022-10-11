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
            <div className={s.add_link}>
                <NavLink to="/admin/addProducts">Добавить товар</NavLink>
            </div>
            <div className={s.menu_box}>
                <NavLink to="/admin/menu/pizza">
                    <div>
                        <h5>Пицца</h5>
                        <p>9</p>
                    </div>
                </NavLink>
                <NavLink to="/admin/menu/burgers">
                    <div>
                        <h5>Бургер</h5>
                        <p>5</p>
                    </div>
                </NavLink>
                <NavLink to="/admin/menu/sushi">
                    <div>
                        <h5>Суши</h5>
                        <p>1</p>
                    </div>
                </NavLink>
                <NavLink to="/admin/menu/rolls">
                    <div>
                        <h5>Роллы</h5>
                        <p>1</p>
                    </div>
                </NavLink>
                <NavLink to="/admin/menu/salads">
                    <div>
                        <h5>Салаты</h5>
                        <p>1</p>
                    </div>
                </NavLink>
                <NavLink to="/admin/menu/desserts">
                    <div>
                        <h5>Десерты</h5>
                        <p>1</p>
                    </div>
                </NavLink>
                <NavLink to="/admin/menu/drinks">
                    <div>
                        <h5>Напитки</h5>
                        <p>1</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminMainContent;