import React from 'react';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import s from "./CartItem.module.scss"

const CartItem = () => {

    return (
        <li className={s.item}>
            <NavLink to={AllRoutes.product + `${1}`}>
                <img src="https://m.media-amazon.com/images/I/711y8vC4+nL._AC_UY218_.jpg"
                    alt="" className={s.img} />
            </NavLink>
            <div className={s.itemInfo}>
                <NavLink to={AllRoutes.product + `${1}`}>
                    <h3 className={s.itemTitle}>Fiodio 61 Keys RGB Wireless and Wired Mechanical Gaming Keyboard with Blue Switches, Audible Click Sound Rainbow Portable Compact Mini Office Keyboard for Windows PC Fiodio 61</h3>
                </NavLink>
                <div className={s.note}>
                    Usually ships within 6 to 10 days.
                </div>
                <div className={s.quan}>
                    Quantity: 175
                </div>
                <ul className={s.actions}>
                    <li className={s.action}>
                        Delete
                    </li>
                    <li className={s.action}>
                        Add one
                    </li>
                    <li className={s.action}>
                        Remove one
                    </li>
                </ul>
            </div>
            <div className={s.itemPrice}>
                $777.913
            </div>
        </li>
    );
};

export default CartItem;