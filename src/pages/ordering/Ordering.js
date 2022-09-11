import React from 'react';
import style from './Ordering.module.css';
import burger from "../../assets/images/Burger1.png";

const Ordering = () => {
    return (
        <div className={style.container}>
            <h3 className={style.title}>Оформление заказа</h3>
            <div className={style.order_box}>
                <div className={style.personal_data}>
                    <h5>Ваши контактные данные</h5>
                    <div className={style.subtitle}>
                        <a href="#">Я новый покупатель</a>
                        <a href="#">Авторизоваться</a>
                    </div>
                    <div>
                        <form action="#" className={style.personal_form}>
                            <input type="text" placeholder="Фамилия"/>
                            <input type="text" placeholder="Имя"/>
                            <input type="text" placeholder="Мобильный телефон: 996555555555"/>
                            <input type="email" placeholder="Email"/>
                        </form>
                    </div>
                    <h5>Ваш заказ</h5>
                    <div>
                        <div className={style.nav_list}>
                            <ul>
                                <li className={style.list_first}>Продукт</li>
                                <li className={style.list_second}>Количество</li>
                                <li className={style.list_third}>Цена</li>
                                <li>К оплате</li>
                            </ul>
                        </div>
                        <hr className={style.br}/>
                        <div>
                            <table className={style.tb_box}>
                                <tr>
                                    <td className={style.product_name}>
                                        <div>
                                            <img src={burger} alt=""/>
                                        </div>
                                        <div>
                                            <p>Чизбургер</p>
                                            <a href="#">Показать сведения о продукте</a>
                                        </div>
                                    </td>
                                    <td className={style.amount}>
                                        <p>1</p>
                                    </td>
                                    <td className={style.product_price}>
                                        <p>200 сом</p>
                                    </td>
                                    <td className={style.price_sum}>
                                        <p>200 сом</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <hr className={style.br}/>
                        <div>
                            <table className={style.tb_box}>
                                <tr>
                                    <td className={style.product_name}>
                                        <div>
                                            <img src={burger} alt=""/>
                                        </div>
                                        <div>
                                            <p>Чизбургер</p>
                                            <a href="#">Показать сведения о продукте</a>
                                        </div>
                                    </td>
                                    <td className={style.amount}>
                                        <p>1</p>
                                    </td>
                                    <td className={style.product_price}>
                                        <p>200 сом</p>
                                    </td>
                                    <td className={style.price_sum}>
                                        <p>200 сом</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <hr className={style.br}/>
                    </div>
                    <h5>Адрес доставки</h5>
                    <div>
                        <form action="#" className={style.delivery_form}>
                            <div className={style.radio_box}>
                                <input type="radio" id="self_call"/>
                                <label htmlFor="self_call">Самовывоз</label>
                            </div>
                            <div className={style.radio_box}>
                                <input type="radio" id="delivery"/>
                                <label htmlFor="delivery">Курьерская доставка</label>
                            </div>
                            <div>
                                <select className={style.delivery_country}>
                                    <option value="kg">Кыргызстан</option>
                                    <option value="kz">Казакстан</option>
                                    <option value="ru">Россия</option>
                                    <option value="am">Армения</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" className={style.delivery_address} placeholder="Введите адрес доставки"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={style.side_box}>
                    <div className={style.heading}>
                        <p>Промокод</p>
                        <input type="text" placeholder="Введите сюда промокод"/>
                    </div>
                    <div className={style.sum_info}>
                        <h5>Итого:</h5>
                        <div>
                            <p className={style.txt_1}>1 товара на сумму</p>
                            <p className={style.number_1}>200 сом</p>
                            <p className={style.txt_2}>К оплате</p>
                            <p className={style.number_2}>400 сом</p>
                        </div>
                    </div>
                    <div className={style.btn}>
                        <button>Подтвердить заказ</button>
                    </div>
                </div>
                <div className={style.payment_box}>
                    <h5>Способ оплаты</h5>
                    <form action="#" className={style.payment_form}>
                        <div className={style.payment_element}>
                            <input type="radio" id="cash"/>
                            <label htmlFor="cash">Наличными</label>
                        </div>
                        <div className={style.payment_element}>
                            <input type="radio" id="bank_transfer"/>
                            <label htmlFor="bank transfer">Банковский перевод</label>
                        </div>
                        <div className={style.payment_el}>
                            <input type="radio" id="card"/>
                            <label htmlFor="card">Оплата картой, электронными кошельками на сайте</label>
                        </div>
                        <div className={style.payment_element}>
                            <input type="radio" id="remittance"/>
                            <label htmlFor="remittance">Денежный перевод</label>
                        </div>
                        <div className={style.payment_element}>
                            <input type="radio" id="pay_onspot"/>
                            <label htmlFor="pay_onspot">Оплата на месте</label>
                        </div>
                    </form>
                    <h5>Комментарий к заказу</h5>
                    <form action="#" className={style.comment}>
                        <textarea cols="145" rows="5"> </textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ordering;