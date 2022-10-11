import React from 'react';
import {Link} from "react-router-dom";
import s from "./AdminAddFeedback.module.css";
import api from "../../../constants/api";
import toast from "react-hot-toast";

const AdminAddFeedback = () => {

    const saveData = (e) => {

        const data = {
            img: e.currentTarget.img.value,
            name: e.currentTarget.name.value,
            text: e.currentTarget.text.value,
            date: e.currentTarget.date.value,
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(api.feedback, options)
            .then(response => {
                if (response.status === 201){
                    toast.success('Отзыв успешно создан');
                } else{
                    toast.error('Что-то пошло не так. Перегрузите страницу');
                }
            })
    }

    return (
        <div className={s.container}>
            <Link to="/admin/main" className={s.link}>Вернуться на главную</Link>
            <h2>Добавление отзыва</h2>
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
                        placeholder="Введите имя"
                        name="name"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите текст"
                        name="text"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите дату"
                        name="date"
                    />
                </div>
                <div className={s.form_control}>
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default AdminAddFeedback;