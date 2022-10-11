import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../constants/api";
import s from "./AdminProductsPage.module.css";

const AdminProductElement = (props) => {

    const params = useParams();

    const getProducts = () => {
        const url = api[params.menu_name];

        fetch(url)
            .then(response => response.json())
            .then(data => data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    const deleteProducts = (id) => {
        const url = api[params.menu_name] + '/' + id;

        const options = {
            method: 'DELETE'
        }

        fetch(url, options)
            .then(response => {
                if (response.status === 200){
                    toast.success('Товар успешно удален')
                } else {
                    toast.error('Упс ошибочка. Попробуйте позже')
                }
            })
    }

    return (
        <div className={s.product_card}>
            <img src={props.img} alt=""/>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
            <span>{props.price}</span>
            <div className={s.btn_box}>
                <button className={s.edit_btn}>Редактировать</button>
                <button className={s.delete_btn} onClick={() => deleteProducts(props.id)}>Удалить</button>
            </div>
        </div>
    );
};

export default AdminProductElement;