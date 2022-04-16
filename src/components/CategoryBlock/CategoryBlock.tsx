import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ICateg } from '../../utils/data';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import s from "./CategoryBlock.module.scss"

interface IProps {
    item: ICateg
}

const CategoryBlock: FC<IProps> = ({ item }) => {


    return (
        <div className={s.item}>
            <h2 className={s.title}>{item.title}</h2>

            <NavLink to={AllRoutes.products + `/${item.cat}`}>
                <div style={{ backgroundImage: `url(${item.img})` }}
                    className={s.img}></div>
            </NavLink>

            <div className={s.show}>
                <NavLink to={AllRoutes.products + `/${item.cat}`}>Show now</NavLink>
            </div>
        </div>
    );
};

export default CategoryBlock;