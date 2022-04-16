import React, { FC } from 'react';
import s from "./OrderItem.module.scss"

interface IOrderItemProps {
    item: any
}

const OrderItem: FC<IOrderItemProps> = ({ item }) => {
    return (
        <li className={s.item}>
            <div className={s.header}>
                <div className={s.placed}>
                    <p className={s.label}>ORDER PLACED</p>
                    10 march 2022
                </div>
                <div className={s.total}>
                    <p className={s.label}>TOTAL</p>
                    <p>$10771</p>
                </div>
                <div className={s.count}>
                    7 items
                </div>
            </div>

            <div className={s.images}>
                {item.img.map((i: any) => <img src={i} alt="" key={i} />)}
            </div>
        </li>
    );
};

export default OrderItem;