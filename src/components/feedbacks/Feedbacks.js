import React from 'react';
import feedbacks from "../../constants/feedbacks";
import FeedbackElement from "./FeedbackElement";
import style from './Feedbacks.module.css';

const Feedbacks = () => {
    const elements = feedbacks.map((item, id) => {
        return <FeedbackElement
            key={id}
            img={item.img}
            name={item.name}
            text={item.text}
            date={item.date}
        />
    })

    return (
        <div>
            <h2 className={style.title}>Отзывы</h2>
            <div className={style.container}>
                {elements}
            </div>
        </div>

    );
};

export default Feedbacks;