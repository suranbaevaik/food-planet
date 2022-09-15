import React from "react";
import frame from "../../assets/icons/frame.svg";
import pen from "../../assets/icons/pen.svg";
import s from "./Feedbacks.module.css";

const FeedbackElement = (props) => {
    return (
        <div>
            <div className={s.frame_box}>
                <img className={s.frame_img} src={frame} alt=""/>
                <div className={s.content}>
                    <img className={s.circle} src={props.img} alt=""/>
                    <h3>{props.name}</h3>
                    <img className={s.pen} src={pen} alt=""/>
                    <p>{props.text}</p>
                </div>
                <div className={s.date}>
                    <p >{props.date}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackElement;