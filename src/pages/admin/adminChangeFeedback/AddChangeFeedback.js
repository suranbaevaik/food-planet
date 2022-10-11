import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../constants/api";
import SideBar from "../../../components/sideBar/SideBar";
import search from "../../../assets/icons/search.svg";
import notification from "../../../assets/icons/new.svg";
import divider from "../../../assets/icons/h-divider.svg";
import photo from "../../../assets/icons/photo.svg";
import s from "./AddChangeFeedback.module.css";

const AddChangeFeedback = () => {
    const params = useParams();
    const [review, setReview] = useState([]);

    const getReview = () => {
        const url = api.feedback;

        fetch(url)
            .then(response => response.json())
            .then(data => setReview(data))
    }

    useEffect(() => {
        getReview();
    }, [])

    const deleteReview = (id) => {
        const url = api.feedback + '/' + id;

        const options = {
            method: 'DELETE'
        }

        fetch(url, options)
            .then(response => {
                if (response.ok){
                    toast.success('Отзыв успешно удален')
                    getReview();
                } else {
                    toast.error('Упс ошибочка. Попробуйте позже')
                }
            })
    }

    const getLink = (id) => '/admin/updateFeedback/' + params.feedback_el + '/' + id;

    return (
        <div className={s.container}>
            <SideBar/>
            <div className={s.main_box}>
                <div className={s.head_box}>
                    <h4>Отзывы</h4>
                    <img src={search} alt=""/>
                    <img src={notification} alt=""/>
                    <img src={divider} alt=""/>
                    <p>Jones Ferdinand</p>
                    <img src={photo} alt=""/>
                </div>
                <div className={s.add_link}>
                    <Link to="/admin/addFeedback">Добавить отзыв</Link>
                </div>
                <div className={s.menu_box}>
                    {
                        review.map((item) => {
                            return (
                                <div className={s.product_card}>
                                    <img src={item.img} alt=""/>
                                    <h5>{item.name}</h5>
                                    <p>{item.text}</p>
                                    <span>{item.date}</span>
                                    <div className={s.btn_box}>
                                        <Link to={getLink(item.id)}>
                                            <button className={s.edit_btn}>Редактировать</button>
                                        </Link>

                                        <button className={s.delete_btn} onClick={() => deleteReview(item.id)}>Удалить</button>
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

export default AddChangeFeedback;