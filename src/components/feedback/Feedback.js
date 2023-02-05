import React, {useEffect, useState} from "react";
import api from "../../constants/api";
import FeedbackElement from "./FeedbackElement";
import s from "./Feedbacks.module.css";

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);

    const getTrends = () => {
        const url = api.feedback;
        fetch(url)
            .then(response => response.json())
            .then(data => setFeedback(data))
    }

    useEffect(() => {
        getTrends()
    }, [])

    const elements = feedback.map((item) => {
        return <FeedbackElement
            key={item.id}
            img={item.image}
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