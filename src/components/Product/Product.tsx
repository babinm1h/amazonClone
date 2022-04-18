import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IItem } from '../../types/models';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import Rating from '../Rating/Rating';
import s from "./Product.module.scss"

interface IProductProps {
    item: IItem
}

const Product: FC<IProductProps> = ({ item }) => {

    const allRates = item.reviews.map(i => i.rate)

    const avgRate = allRates.reduce((prev, cur) => prev + cur, 0)

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

                <Rating avgRate={avgRate} allRates={allRates} />

                <div className={s.price}>
                    $ {item.price}
                </div>
            </div>
        </li>
    );
};

export default Product;