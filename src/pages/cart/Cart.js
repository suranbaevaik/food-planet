import React from 'react';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";
import burger from '../../assets/images/Burger1.png';
import remove from '../../assets/icons/remove.png';
import right_arrow from '../../assets/icons/right-arr.svg';
import style from './Cart.module.css';

const Cart = () => {
    return (
        <div className={style.container}>
            <div className={style.title_box}>
                <h3>Корзина</h3>
                <p>Товары в вашей корзине</p>
            </div>
            <div>
                <table className={style.order_table}>
                    <thead>
                        <tr>
                            <td>
                                <p>Продукт</p>
                            </td>
                            <td>
                                <p>Количество</p>
                            </td>
                            <td>
                                <p>Комментарий</p>
                            </td>
                            <td>
                                <p>Цена</p>
                            </td>
                            <td colSpan="2">
                                <p>К оплате</p>
                            </td>
                        </tr>
                    </thead>
                    <tr className={style.product_container}>
                        <td className={style.product_box}>
                            <div className={style.product_img}>
                                <img src={burger} alt=""/>
                            </div>
                            <div>
                                <p>Чизбургер</p>
                            </div>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td className={style.remove}>
                            <img src={remove}  alt=""/>
                        </td>
                    </tr>
                    <tr className={style.product_container}>
                        <td className={style.product_box}>
                            <div className={style.product_img}>
                                <img src={burger} alt=""/>
                            </div>
                            <div>
                                <p>Чизбургер</p>
                            </div>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td>
                            <p>200 сом</p>
                        </td>
                        <td className={style.remove}>
                            <img src={remove} alt=""/>
                        </td>
                    </tr>
                    <tr className={style.sum_cell}>
                        <td className={style.sum_title} colSpan="4">
                            <p>Итого:</p>
                        </td>
                        <td colSpan="2">
                            <p>400 сом</p>
                        </td>
                    </tr>
                    <tfoot>
                        <tr>
                            <td colSpan="3">
                                <a href="#">
                                    <img className={style.rotate} src={right_arrow} alt=""/>
                                    Продолжить покупки
                                </a>
                            </td>
                            <td colSpan="3" className={style.button_cell}>
                                <div>
                                    <NavLink to="/ordering">
                                        <button type="submit">Оформить заказ</button>
                                    </NavLink>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <Outlet/>
        </div>
    );
};

export default Cart;