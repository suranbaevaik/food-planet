import React from 'react';
import search from "../../../assets/icons/search.svg";
import notification from "../../../assets/icons/new.svg";
import divider from "../../../assets/icons/h-divider.svg";
import photo from "../../../assets/icons/photo.svg";
import burgers from '../../../constants/trends';
import SideHeader from "../../../components/sideHeader/SideHeader";
import AdminProductElement from "./AdminProductElement";
import style from './AdminProductsPage.module.css';

const AdminProductsPage = () => {
    const elements = burgers.map((item) => {
        return <AdminProductElement
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
        />
    })

    return (
        <div className={style.container}>
            <SideHeader/>
            <div className={style.main_box}>
                <div className={style.head_box}>
                    <h4>Бургеры</h4>
                    <img src={search} alt=""/>
                    <img src={notification} alt=""/>
                    <img src={divider} alt=""/>
                    <p>Jones Ferdinand</p>
                    <img src={photo} alt=""/>
                </div>
                <div className={style.menu_box}>
                    {elements}
                </div>
            </div>
        </div>
    );
};

export default AdminProductsPage;