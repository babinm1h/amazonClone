import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';
import { fetchCart } from '../../store/thunks/cart';
import s from './Cart.module.scss'

const Cart = () => {

    const dispatch = useDispatch()
    const { items, isLoading, totalCount, totalPrice } = useAppSelector(state => state.cart)

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    if (isLoading) {
        return <div className="loader_centered"><Loader /></div>
    }

    return (
        <DefaultLayout>
            <div className={s.container}>
                <div className={s.content}>
                    {totalCount === 0
                        ? <EmptyCart />
                        : <>
                            <div className={s.column1}>
                                <div className={s.cart}>
                                    <div className={s.header}>
                                        <h1 className={s.title}>Shopping Cart</h1>
                                        <span className={s.removeAll}>Remove All Items</span>
                                        <div className={s.subTitle}>
                                            <span>Price</span>
                                        </div>
                                    </div>

                                    <ul className={s.items}>
                                        {items.map(i => <CartItem key={i._id} item={i} />)}
                                    </ul>
                                </div>
                            </div>


                            <div className={s.column2}>
                                <div className={s.totalBlock}>
                                    <span className={s.total}>
                                        Subtotal (1 item): <span>$ {totalPrice.toFixed(2)}</span>
                                    </span>
                                    <button className={s.button}>Proceed to checkout</button>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Cart;