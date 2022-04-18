import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IItem } from '../../types/models';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import s from "./Product.module.scss"

interface IProductProps {
    item: IItem
}

const Product: FC<IProductProps> = ({ item }) => {
    return (
        <li className={s.item}>
            <NavLink to={AllRoutes.product + `/${item.category}/${item._id}`}>
                <img src={item.img}
                    alt={item.title} />
            </NavLink>
            <div className={s.itemInfo}>
                <NavLink to={AllRoutes.product + `/${item.category}/${item._id}`}>
                    <h2 className={s.itemTitle}>
                        {item.title}
                    </h2>
                </NavLink>
                <div className={s.brand}>
                    Brand: <span>{item.brand.title}</span>
                </div>
                <div className={s.rating}>
                    rating
                </div>
                <div className={s.price}>
                    $ {item.price}
                </div>
            </div>
        </li>
    );
};

export default Product;