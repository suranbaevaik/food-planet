import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import burger from "../../../assets/images/Burger1.png";
import s from "./CheckoutPage.module.css";

const CheckoutPage = () => {
    return (
        <>
            <div className={s.container}>
                <h3 className={s.title}>Оформление заказа</h3>
                <div className={s.order_box}>
                    <div className={s.personal_data}>
                        <h5>Ваши контактные данные</h5>
                        <div className={s.subtitle}>
                            <a href="#">Я новый покупатель</a>
                            <a href="#">Авторизоваться</a>
                        </div>
                        <div>
                            <form action="#" className={s.personal_form}>
                                <input type="text" placeholder="Фамилия"/>
                                <input type="text" placeholder="Имя"/>
                                <input type="text" placeholder="Мобильный телефон: 996555555555"/>
                                <input type="email" placeholder="Email"/>
                            </form>
                        </div>
                        <h5>Ваш заказ</h5>
                        <div>
                            <div className={s.nav_list}>
                                <ul>
                                    <li className={s.list_first}>Продукт</li>
                                    <li className={s.list_second}>Количество</li>
                                    <li className={s.list_third}>Цена</li>
                                    <li>К оплате</li>
                                </ul>
                            </div>
                            <hr className={s.br}/>
                            <div>
                                <table className={s.tb_box}>
                                    <tr>
                                        <td className={s.product_name}>
                                            <div>
                                                <img src={burger} alt=""/>
                                            </div>
                                            <div>
                                                <p>Чизбургер</p>
                                                <a href="#">Показать сведения о продукте</a>
                                            </div>
                                        </td>
                                        <td className={s.amount}>
                                            <p>1</p>
                                        </td>
                                        <td className={s.product_price}>
                                            <p>200 сом</p>
                                        </td>
                                        <td className={s.price_sum}>
                                            <p>200 сом</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <hr className={s.br}/>
                            <div>
                                <table className={s.tb_box}>
                                    <tr>
                                        <td className={s.product_name}>
                                            <div>
                                                <img src={burger} alt=""/>
                                            </div>
                                            <div>
                                                <p>Чизбургер</p>
                                                <a href="#">Показать сведения о продукте</a>
                                            </div>
                                        </td>
                                        <td className={s.amount}>
                                            <p>1</p>
                                        </td>
                                        <td className={s.product_price}>
                                            <p>200 сом</p>
                                        </td>
                                        <td className={s.price_sum}>
                                            <p>200 сом</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <hr className={s.br}/>
                        </div>
                        <h5>Адрес доставки</h5>
                        <div>
                            <form action="#" className={s.delivery_form}>
                                <div className={s.radio_box}>
                                    <input type="radio" id="self_call"/>
                                    <label htmlFor="self_call">Самовывоз</label>
                                </div>
                                <div className={s.radio_box}>
                                    <input type="radio" id="delivery"/>
                                    <label htmlFor="delivery">Курьерская доставка</label>
                                </div>
                                <div>
                                    <select className={s.delivery_country}>
                                        <option value="kg">Кыргызстан</option>
                                        <option value="kz">Казакстан</option>
                                        <option value="ru">Россия</option>
                                        <option value="am">Армения</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" className={s.delivery_address} placeholder="Введите адрес доставки"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={s.side_box}>
                        <div className={s.heading}>
                            <p>Промокод</p>
                            <input type="text" placeholder="Введите сюда промокод"/>
                        </div>
                        <div className={s.sum_info}>
                            <h5>Итого:</h5>
                            <div>
                                <p className={s.txt_1}>1 товара на сумму</p>
                                <p className={s.number_1}>200 сом</p>
                                <p className={s.txt_2}>К оплате</p>
                                <p className={s.number_2}>400 сом</p>
                            </div>
                        </div>
                        <div className={s.btn}>
                            <button>Подтвердить заказ</button>
                        </div>
                    </div>
                    <div className={s.payment_box}>
                        <h5>Способ оплаты</h5>
                        <form action="#" className={s.payment_form}>
                            <div className={s.payment_element}>
                                <input type="radio" id="cash"/>
                                <label htmlFor="cash">Наличными</label>
                            </div>
                            <div className={s.payment_element}>
                                <input type="radio" id="bank_transfer"/>
                                <label htmlFor="bank transfer">Банковский перевод</label>
                            </div>
                            <div className={s.payment_el}>
                                <input type="radio" id="card"/>
                                <label htmlFor="card">Оплата картой, электронными кошельками на сайте</label>
                            </div>
                            <div className={s.payment_element}>
                                <input type="radio" id="remittance"/>
                                <label htmlFor="remittance">Денежный перевод</label>
                            </div>
                            <div className={s.payment_element}>
                                <input type="radio" id="pay_onspot"/>
                                <label htmlFor="pay_onspot">Оплата на месте</label>
                            </div>
                        </form>
                        <h5>Комментарий к заказу</h5>
                        <form action="#" className={s.comment}>
                            <textarea cols="145" rows="5"> </textarea>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default CheckoutPage;