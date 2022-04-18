import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IItem } from '../../../types/models';
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import s from "./SimilarItem.module.scss"

interface ISimilarItemProps {
    item: IItem
}

const SimilarItem: FC<ISimilarItemProps> = ({ item }) => {
    return (
        <li className={s.item}>
            <NavLink to={AllRoutes.product + `/${item.category}/${item._id}`}>
                <img src={item.img} alt={item.title} />
            </NavLink>
            <div className={s.itemTitle}>
                {item.title}
            </div>
            <span className={s.itemPrice}>$ {item.price}</span>
        </li>
    );
};

export default SimilarItem;