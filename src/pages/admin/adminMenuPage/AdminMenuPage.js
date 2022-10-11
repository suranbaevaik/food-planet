import React from "react";
import {NavLink} from "react-router-dom";
import SideBar from "../../../components/sideBar/SideBar";
import search from "../../../assets/icons/search.svg";
import notification from "../../../assets/icons/new.svg";
import divider from "../../../assets/icons/h-divider.svg";
import photo from "../../../assets/icons/photo.svg";
import burger from "../../../assets/images/Burger1.png";
import pizza from "../../../assets/images/Pizza2.png";
import sushi from "../../../assets/images/sushi.png";
import rolls from "../../../assets/images/roll.png";
import salads from "../../../assets/images/cezar.png";
import dessert from "../../../assets/images/macaron.png";
import drinks from "../../../assets/images/pepsi-drink.png";
import s from "./AdminMenuPage.module.css";

const AdminMenuPage = () => {
    return (
        <div className={s.container}>
            <SideBar/>
            <div className={s.main_box}>
                <div className={s.head_box}>
                    <h4>Меню</h4>
                    <img src={search} alt=""/>
                    <img src={notification} alt=""/>
                    <img src={divider} alt=""/>
                    <p>Jones Ferdinand</p>
                    <img src={photo} alt=""/>
                </div>
                <div className={s.menu_box}>
                    <NavLink to="/admin/menu/pizza">
                        <div className={s.menu_item}>
                            <img src={pizza} alt=""/>
                            <div className={s.name_box}>
                                <h5>Пицца</h5>
                                <NavLink to="/admin/menu/pizza">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/admin/menu/burgers">
                        <div className={s.menu_item}>
                            <img src={burger} alt=""/>
                            <div className={s.name_box}>
                                <h5>Бургеры</h5>
                                <NavLink to="/admin/menu/burgers">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/admin/menu/sushi">
                        <div className={s.menu_item}>
                            <img src={sushi} alt=""/>
                            <div className={s.name_box}>
                                <h5>Суши</h5>
                                <NavLink to="/admin/menu/sushi">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/admin/menu/rolls">
                        <div className={s.menu_item}>
                            <img src={rolls} alt=""/>
                            <div className={s.name_box}>
                                <h5>Роллы</h5>
                                <NavLink to="/admin/menu/rolls">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/admin/menu/salads">
                        <div className={s.menu_item}>
                            <img src={salads} alt=""/>
                            <div className={s.name_box}>
                                <h5>Салаты</h5>
                                <NavLink to="/admin/menu/salads">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/admin/menu/desserts">
                        <div className={s.menu_item}>
                            <img src={dessert} alt=""/>
                            <div className={s.name_box}>
                                <h5>Десерты</h5>
                                <NavLink to="/admin/menu/desserts">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/admin/menu/drinks">
                        <div className={s.menu_item}>
                            <img src={drinks} alt=""/>
                            <div className={s.name_box}>
                                <h5>Напитки</h5>
                                <NavLink to="/admin/menu/drinks">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuPage;