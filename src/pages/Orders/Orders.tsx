import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../../components/AppRoutes/AppRoutes';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import Loader from '../../components/Loader/Loader';
import OrderItem from '../../components/OrderItem/OrderItem';
import { useAppSelector } from '../../hooks/redux';
import { fetchOrders } from '../../store/thunks/orders';
import s from "./Orders.module.scss"

const Orders = () => {
    const dispatch = useDispatch()

    const { items, isLoading } = useAppSelector(state => state.orders)

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])

    return (
        <DefaultLayout>

            <div className={s.container}>
                <main className={s.main}>
                    <h1>Your Orders</h1>
                    {isLoading
                        ? <Loader />
                        : <div className={s.content}>
                            {true
                                ? <>
                                    <h2>{items.length} Orders</h2>
                                    <ul className={s.orders}>
                                        {items.map(i => <OrderItem item={i} key={i._id} />)}
                                    </ul>
                                </>

                                : <div className={s.empty}>
                                    <h2 className={s.emptyTitle}>You dont have active orders!</h2>
                                    <NavLink to={AllRoutes.home}>
                                        <button className={s.emptyBtn}>Continue shopping</button>
                                    </NavLink>
                                </div>}
                        </div>}
                </main>
            </div>

        </DefaultLayout>
    );
};

export default Orders;