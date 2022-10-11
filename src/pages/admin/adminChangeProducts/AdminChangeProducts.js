import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../constants/api";
import SideBar from "../../../components/sideBar/SideBar";
import search from "../../../assets/icons/search.svg";
import notification from "../../../assets/icons/new.svg";
import divider from "../../../assets/icons/h-divider.svg";
import photo from "../../../assets/icons/photo.svg";
import s from "./AdminChangeProducts.module.css";

const AdminChangeProducts = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);

    const getProducts = () => {
        const url = api[params.menu_name];

        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }

    useEffect(() => {
        getProducts();
    }, [])

    let title;
    if (params.menu_name === 'pizza'){
        title= 'Пицца';

    } else if (params.menu_name === 'burgers'){
        title = 'Бургеры';

    } else if (params.menu_name === 'sushi'){
        title = 'Суши';
    } else if (params.menu_name === 'rolls'){
        title = 'Роллы';
    } else if (params.menu_name === 'salads'){
        title = 'Салаты';
    } else if (params.menu_name === 'desserts'){
        title = 'Десерты';
    } else if (params.menu_name === 'drinks'){
        title = 'Напитки';
    }

    const deleteProducts = (id) => {
        const url = api[params.menu_name] + '/' + id;

        const options = {
            method: 'DELETE'
        }

        fetch(url, options)
            .then(response => {
                if (response.ok){
                    toast.success('Товар успешно удален')
                    getProducts();
                } else {
                    toast.error('Упс ошибочка. Попробуйте позже')
                }
            })
    }

    const getLink = (id) => '/admin/updateProducts/' + params.menu_name + '/' + id;

    return (
        <div className={s.container}>
            <SideBar/>
            <div className={s.main_box}>
                <div className={s.head_box}>
                    <h4>{title}</h4>
                    <img src={search} alt=""/>
                    <img src={notification} alt=""/>
                    <img src={divider} alt=""/>
                    <p>Jones Ferdinand</p>
                    <img src={photo} alt=""/>
                </div>
                <div className={s.menu_box}>
                    {
                        product.map((item) => {
                            return (
                                <div className={s.product_card}>
                                    <img src={item.img} alt=""/>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                    <span>{item.price}</span>
                                    <div className={s.btn_box}>
                                        <Link to={getLink(item.id)}>
                                            <button className={s.edit_btn}>Редактировать</button>
                                        </Link>

                                        <button className={s.delete_btn} onClick={() => deleteProducts(item.id)}>Удалить</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminChangeProducts;