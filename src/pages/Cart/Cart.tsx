import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { OrdersService } from '../../API/OrdersService';
import CartItem from '../../components/CartItem/CartItem';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';
import { fetchCart } from '../../store/thunks/cart';
import s from './Cart.module.scss'
import { STRIPE_PUB } from '../../const';
import { loadStripe } from '@stripe/stripe-js/pure';

const stripePromise = loadStripe(STRIPE_PUB)


const Cart = () => {

    const dispatch = useDispatch()
    const { items, isLoading, totalCount, totalPrice } = useAppSelector(state => state.cart)

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])



    const handleStripe = async () => {
        const stripe = await stripePromise;

        const id = await OrdersService.stripeCreate(items)

        const res = await stripe?.redirectToCheckout({
            sessionId: id
        })

        if (res?.error) console.log(res.error.message)
    }

    return (
        <DefaultLayout>
            <div className={s.container}>
                <div className={s.content}>

                    {isLoading ? <div className={s.loader}><Loader /></div> : !totalCount
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
                                        Subtotal {totalCount} items:
                                        <span> $ {totalPrice.toFixed(2)}</span>
                                    </span>
                                    <button className={s.button} onClick={handleStripe}>
                                        Proceed to checkout
                                    </button>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Cart;