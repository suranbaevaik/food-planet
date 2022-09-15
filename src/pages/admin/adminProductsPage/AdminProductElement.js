import React from 'react';
import style from './AdminProductsPage.module.css';

const AdminProductElement = (props) => {
    return (
        <div className={style.product_card}>
            <img src={props.img} alt=""/>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
            <span>{props.price}</span>
            <div className={style.btn_box}>
                <button className={style.edit_btn}>Редактировать</button>
                <button className={style.delete_btn}>Удалить</button>
            </div>
        </div>
    );
};

export default AdminProductElement;