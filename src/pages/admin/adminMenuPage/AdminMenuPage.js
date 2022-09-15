import React from "react";
import {NavLink} from "react-router-dom";
import SideBar from "../../../components/sideBar/SideBar";
import search from "../../../assets/icons/search.svg";
import notification from "../../../assets/icons/new.svg";
import divider from "../../../assets/icons/h-divider.svg";
import photo from "../../../assets/icons/photo.svg";
import burger from "../../../assets/images/Burger1.png";
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
                    <NavLink to="/admin/menu/burgers">
                        <div className={s.menu_item}>
                            <img src={burger} alt=""/>
                            <div className={s.name_box}>
                                <h5>Бургеры</h5>
                                <NavLink to="/admin/menu/burgers">перейти ></NavLink>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuPage;