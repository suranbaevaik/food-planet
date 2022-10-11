import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../../../constants/api';
import s from './AdminUpdateProducts.module.css';

const AdminUpdateProducts = () => {
    const {menu_name, id} = useParams();
    const [product, setProduct] = useState({});
    const [isPending, setIsPending] = useState(false);
    const url = api[menu_name] + '/' + id

    const getProductById = () => {
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.json();
                }

                toast.error('Данные не подгрузились. Попробуйте позже');
            })
            .then(data => setProduct(data))
    }

    useEffect(getProductById, []);

    const updateProduct = (e) => {
        const data ={
            img: e.currentTarget.img.value,
            title: e.currentTarget.title.value,
            desc: e.currentTarget.desc.value,
            price: e.currentTarget.price.value,
        }

        setIsPending(true);

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        }

        fetch (url, options)
            .then(response => {
                if(response.ok){
                    toast.success('Товар успешно обновился')
                    setIsPending(false)
                } else{
                    toast.error('Что-то пошло не так. Товар не обновился')
                }
            })
    }

    return (
        <div className={s.container}>
            <Link to="/admin/main" className={s.link}>Вернуться на главную</Link>
            <h2>Редактирование товара</h2>
            <form onSubmit={updateProduct} action="javascript:void(0)">
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените ссылку для фото"
                        name="img"
                        defaultValue={product.img}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените название"
                        name="title"
                        defaultValue={product.title}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените описание"
                        name="desc"
                        defaultValue={product.desc}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените цену"
                        name="price"
                        defaultValue={product.price}
                    />
                </div>
                <div className={s.form_control}>
                    <button disabled={isPending} type="submit">Изменить</button>
                    {isPending ? <p>Идет загрузка</p> : null}
                </div>
            </form>
        </div>
    );
};

export default AdminUpdateProducts;