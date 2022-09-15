import React from "react";
import burgers from "../../../constants/trends";
import SideBar from "../../../components/sideBar/SideBar";
import AdminProductElement from "./AdminProductElement";
import search from "../../../assets/icons/search.svg";
import notification from "../../../assets/icons/new.svg";
import divider from "../../../assets/icons/h-divider.svg";
import photo from "../../../assets/icons/photo.svg";
import s from "./AdminProductsPage.module.css";

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
        <div className={s.container}>
            <SideBar/>
            <div className={s.main_box}>
                <div className={s.head_box}>
                    <h4>Бургеры</h4>
                    <img src={search} alt=""/>
                    <img src={notification} alt=""/>
                    <img src={divider} alt=""/>
                    <p>Jones Ferdinand</p>
                    <img src={photo} alt=""/>
                </div>
                <div className={s.menu_box}>
                    {elements}
                </div>
            </div>
        </div>
    );
};

export default AdminProductsPage;