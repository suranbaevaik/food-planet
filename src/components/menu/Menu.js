import React, {useEffect, useState} from "react";
import api from "../../constants/api";
import MenuElement from "./MenuElement";
import listArrow from "../../assets/icons/list-arrow.svg";
import s from "./Menu.module.css";

const Menu = () => {
    const [menuItem, setMenuItem] = useState([]);

    const changeTab = (e) => {
        const id = e.target.id
        fetch(api[id])
            .then(response => response.json())
            .then(data => setMenuItem(data))
    }

    useEffect(() => {
        if (menuItem.length >= 0){
            fetch(api.pizza)
                .then(response => response.json())
                .then(data => setMenuItem(data))
        }
    }, [])

    const elements = menuItem.map((item, index) => {
        return <MenuElement
            key={index}
            img={item.image}
            title={item.title}
            desc={item.description}
            price={item.price}
        />
    })

    return (
        <>
            <div className={s.nav_bar}>
                <h2 className={s.nav_title}>Меню</h2>
                <nav>
                    <ul className={s.list_menu}>
                        <li><button onClick={changeTab} id="pizza">Пицца</button></li>
                        <li><button onClick={changeTab} id="burgers">Бургеры</button></li>
                        <li><button onClick={changeTab} id="sushi">Суши</button></li>
                        <li><button onClick={changeTab} id="rolls">Роллы</button></li>
                        <li><button onClick={changeTab} id="salads">Салаты</button></li>
                        <li><button onClick={changeTab} id="desserts">Десерты</button></li>
                        <li><button onClick={changeTab} id="drinks">Напитки</button></li>
                    </ul>
                </nav>
            </div>
            <div className={s.sort_box}>
                <div>
                    <p>Сортировать  по:</p>
                </div>
                <div className={s.filter}>
                    <p>По умолчанию</p>
                    <img src={listArrow} alt="arrow"/>
                </div>
            </div>
            <div className={s.container}>
                {elements}
            </div>
            <div className={s.more_btn}>
                <button>Показать еще</button>
            </div>
        </>
    );
};

export default Menu;