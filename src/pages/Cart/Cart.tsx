import React from 'react';
import CartItem from '../../components/CartItem/CartItem';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import s from './Cart.module.scss'

const Cart = () => {

    return (
        <DefaultLayout>
            <div className={s.container}>
                <div className={s.content}>
                    {true
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
                                        <CartItem />
                                    </ul>
                                </div>
                            </div>


                            <div className={s.column2}>
                                <div className={s.totalBlock}>
                                    <span className={s.total}>Subtotal (1 item): <span>$777.99</span></span>
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