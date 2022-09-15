import React from 'react';
import {NavLink} from 'react-router-dom';
import search from "../../../assets/icons/search.svg";
import notification from "../../../assets/icons/new.svg";
import divider from "../../../assets/icons/h-divider.svg";
import photo from "../../../assets/icons/photo.svg";
import burger from '../../../assets/images/Burger1.png';
import style from './AdminMenuPage.module.css';
import SideHeader from "../../../components/sideHeader/SideHeader";

const AdminMenuPage = () => {
    return (
        <div className={style.container}>
            <SideHeader/>
            <div className={style.main_box}>
                <div className={style.head_box}>
                    <h4>Меню</h4>
                    <img src={search} alt=""/>
                    <img src={notification} alt=""/>
                    <img src={divider} alt=""/>
                    <p>Jones Ferdinand</p>
                    <img src={photo} alt=""/>
                </div>
                <div className={style.menu_box}>
                    <div className={style.menu_item}>
                        <img src={burger} alt=""/>
                        <div className={style.name_box}>
                            <h5>Бургеры</h5>
                            <NavLink to="/admin/menu/burgers">перейти ></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuPage;