import React from "react";
import toast from "react-hot-toast";
import productManager from "../../constants/product.manager";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import s from "./Trends.module.css";

const TrendElement = (props) => {
    const addProduct = () => {
        toast.success('Товар успешно добавлен');

        const obj = { count:1, ...props };
        const products = productManager.getProduct();
        let data;

        if (products){
            const checkResult = productManager.checkProduct(props.id, products);

            if (checkResult === -1){
                products.push(obj);
            } else {
                products[checkResult].count = ++products[checkResult].count;
            }

            data = products;
        } else {
            data = obj;
        }

        productManager.setProduct(JSON.stringify(data));
    }

    return (
        <div className={s.trend_card}>
            <img className={s.burger_img} src={props.img}/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <span>{props.price} сом</span>
            <p><img className={s.minus} src={minus} alt=""/>
                1
                <img className={s.plus} src={plus} alt=""/>
            </p>
            <button onClick={addProduct} className={s.btn}>В корзину</button>
        </div>
    );
};

export default TrendElement;