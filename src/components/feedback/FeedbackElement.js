import React from 'react';
import frame from "../../assets/icons/frame.svg";
import pen from '../../assets/icons/pen.svg';
import style from './Feedbacks.module.css';

const FeedbackElement = (props) => {
    return (
        <div>
            <div className={style.frame_box}>
                <img className={style.frame_img} src={frame} alt=""/>
                <div className={style.content}>
                    <img className={style.circle} src={props.img} alt=""/>
                    <h3>{props.name}</h3>
                    <img className={style.pen} src={pen} alt=""/>
                    <p>{props.text}</p>
                </div>
                <div className={style.date}>
                    <p >{props.date}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackElement;