import React from 'react';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import s from "./Product.module.scss"



const Product = () => {
    return (
        <li className={s.item}>
            <NavLink to={AllRoutes.product + `/${1}`}>
                <img src="https://m.media-amazon.com/images/I/711y8vC4+nL._AC_UY218_.jpg"
                    alt="item" />
            </NavLink>
            <div className={s.itemInfo}>
                <NavLink to={AllRoutes.product + `/${1}`}>
                    <h2 className={s.itemTitle}>
                        Fiodio 61 Keys RGB Wireless and Wired Mechanical Gaming Keyboard with Blue Switches, Audible Click Sound Rainbow Portable Compact Mini Office Keyboard for Windows PC Fiodio 61 Keys RGB Wireless and Wired Mechanical Gaming Keyboard with Blue Switches, Audible Click Sound Rainbow Portable Compact Mini Office Keyboard for Windows PC
                    </h2>
                </NavLink>
                <div className={s.rating}>
                    rating
                </div>
                <div className={s.price}>
                    $ 84.77
                </div>
            </div>
        </li>
    );
};

export default Product;