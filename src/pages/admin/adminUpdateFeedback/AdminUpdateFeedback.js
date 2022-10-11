import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../constants/api";
import s from "./AdminUpdateFeedback.module.css";

const AdminUpdateFeedback = () => {
    const {feedback_el, id} = useParams();
    const [review, setReview] = useState({});
    const [isPending, setIsPending] = useState(false);
    const url = api[feedback_el] + '/' + id;

    const getReviewById = () => {
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.json();
                }

                toast.error('Данные не подгрузились. Попробуйте позже');
            })
            .then(data => setReview(data))
    }

    useEffect(() => {
        getReviewById();
    }, []);

    const updateProduct = (e) => {
        const data ={
            img: e.currentTarget.img.value,
            name: e.currentTarget.name.value,
            text: e.currentTarget.text.value,
            date: e.currentTarget.date.value
        }

        setIsPending(true);

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        }

        fetch (url, options)
            .then(response => {
                if(response.ok){
                    toast.success('Отзыв успешно обновился')
                    setIsPending(false)
                } else{
                    toast.error('Что-то пошло не так. Отзыв не обновился')
                }
            })
    }

    return (
        <div className={s.container}>
            <Link to="/admin/main" className={s.link}>Вернуться на главную</Link>
            <h2>Редактирование отзыва</h2>
            <form onSubmit={updateProduct} action="javascript:void(0)">
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените ссылку для фото"
                        name="img"
                        defaultValue={review.img}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените имя"
                        name="name"
                        defaultValue={review.name}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените текст"
                        name="text"
                        defaultValue={review.text}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените дату"
                        name="date"
                        defaultValue={review.date}
                    />
                </div>
                <div className={s.form_control}>
                    <button disabled={isPending} type="submit">Изменить</button>
                    {isPending ? <p>Идет загрузка</p> : null}
                </div>
            </form>
        </div>
    );
};

export default AdminUpdateFeedback;