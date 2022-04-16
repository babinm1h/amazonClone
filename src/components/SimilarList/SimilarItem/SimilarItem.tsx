import React from 'react';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import s from "./SimilarItem.module.scss"

const SimilarItem = () => {
    return (
        <li className={s.item}>
            <NavLink to={AllRoutes.product + `/${1}`}>
                <img src="https://m.media-amazon.com/images/I/711y8vC4+nL._AC_UY218_.jpg" alt="fa" />
                <div className={s.itemTitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore corporis dolores sapiente cupiditate! Ipsum officia, provident accusantium itaque repellat fugiat magnam praesentium maxime quia, est ipsa, assumenda voluptate incidunt!
                </div>
            </NavLink>
            <span className={s.itemPrice}>$ 99.77</span>
        </li>
    );
};

export default SimilarItem;