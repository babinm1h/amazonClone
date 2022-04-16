import React from 'react';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../../components/AppRoutes/AppRoutes';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import OrderItem from '../../components/OrderItem/OrderItem';
import s from "./Orders.module.scss"

const Orders = () => {
    const orders = [
        {
            img: ["https://m.media-amazon.com/images/I/91lZq0WOG8L._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/51PJFzBTASL._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/81etHrzMChL._AC_UY218_.jpg"],
        },
        {
            img: ["https://m.media-amazon.com/images/I/91lZq0WOG8L._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/51PJFzBTASL._AC_UY218_.jpg",
                "https://m.media-amazon.com/images/I/81etHrzMChL._AC_UY218_.jpg", "https://m.media-amazon.com/images/I/81etHrzMChL._AC_UY218_.jpg", "https://m.media-amazon.com/images/I/81etHrzMChL._AC_UY218_.jpg"],
        },
    ]


    return (
        <DefaultLayout>

            <div className={s.container}>
                <main className={s.main}>
                    <h1>Your Orders</h1>
                    <div className={s.content}>
                        {true
                            ? <>
                                <h2>10 Orders</h2>
                                <ul className={s.orders}>
                                    {orders.map(o => <OrderItem item={o} />)}
                                </ul>
                            </>


                            : <div className={s.empty}>
                                <h2 className={s.emptyTitle}>You dont have active orders!</h2>
                                <NavLink to={AllRoutes.home}>
                                    <button className={s.emptyBtn}>Continue shopping</button>
                                </NavLink>
                            </div>}
                    </div>
                </main>
            </div>

        </DefaultLayout>
    );
};

export default Orders;