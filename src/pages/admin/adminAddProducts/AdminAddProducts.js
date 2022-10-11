import React from 'react';
import {NavLink} from 'react-router-dom';
import toast from 'react-hot-toast';
import api from './../../../constants/api';
import s from './AdminAddProducts.module.css';

const AdminAddProducts = () => {
    const saveData = (e) => {

        const data = {
            img: e.currentTarget.img.value,
            title: e.currentTarget.title.value,
            desc: e.currentTarget.desc.value,
            price: e.currentTarget.price.value,
        }

        const catalog = e.currentTarget.catalog.value;

        const options = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(api[catalog], options)
            .then(response => {
                if (response.status === 201){
                    toast.success('Товар успешно создан');
                } else{
                    toast.error('Что-то пошло не так. Перегрузите страницу');
                }
            })
    }

    return (
        <div className={s.container}>
            <NavLink to="/admin/main" className={s.link}>Вернуться на главную</NavLink>
            <h2>Добавление товара</h2>
            <form onSubmit={saveData} action="javascript:void(0)">
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите ссылку для фото"
                        name="img"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите название"
                        name="title"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите описание"
                        name="desc"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите цену"
                        name="price"
                    />
                </div>
                <div className={s.form_control}>
                    <select name="catalog">
                        <option value="0">Выберите продукцию</option>
                        <option value="pizza">Пицца</option>
                        <option value="burgers">Бургеры</option>
                        <option value="sushi">Суши</option>
                        <option value="rolls">Роллы</option>
                        <option value="salads">Салаты</option>
                        <option value="desserts">Десерты</option>
                        <option value="drinks">Напитки</option>
                    </select>
                </div>
                <div className={s.form_control}>
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default AdminAddProducts;