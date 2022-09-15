import React from "react";
import feedback from "../../constants/feedback";
import FeedbackElement from "./FeedbackElement";
import s from "./Feedbacks.module.css";

const Feedback = () => {
    const elements = feedback.map((item) => {
        return <FeedbackElement
            key={item.id}
            img={item.img}
            name={item.name}
            text={item.text}
            date={item.date}
        />
    })

    return (
        <div>
            <h2 className={s.title}>Отзывы</h2>
            <div className={s.container}>
                {elements}
            </div>
        </div>

    );
};

export default Feedback;