import React from "react";
import s from "./AdminProductsPage.module.css";

const AdminProductElement = (props) => {
    return (
        <div className={s.product_card}>
            <img src={props.img} alt=""/>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
            <span>{props.price}</span>
            <div className={s.btn_box}>
                <button className={s.edit_btn}>Редактировать</button>
                <button className={s.delete_btn}>Удалить</button>
            </div>
        </div>
    );
};

export default AdminProductElement;