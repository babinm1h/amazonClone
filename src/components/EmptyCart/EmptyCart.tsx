import React from 'react';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import s from "./EmptyCart.module.scss"

const EmptyCart = () => {
    return (
        <div className={s.content}>
            <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="empty" />
            <div>
                <h1>Your Amazon Cart is empty.</h1>
                <p>
                    Continue shopping on the <NavLink to={AllRoutes.home}>Amazon</NavLink> homepage!
                </p>
            </div>
        </div>
    );
};

export default EmptyCart;