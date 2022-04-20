import React, { FC } from 'react';
import { IOrder } from '../../types/models';
import s from "./OrderItem.module.scss"
import { parseISO, format } from "date-fns"
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { removeOrder } from '../../store/thunks/orders';

interface IOrderItemProps {
    item: IOrder
}

const OrderItem: FC<IOrderItemProps> = ({ item }) => {

    const date = format(parseISO(item.createdAt), "MM/dd/yyyy").toString()

    const dispatch = useDispatch()

    const isRemoving = useAppSelector(state => state.orders.isRemoving)

    const handleRemove = () => {
        dispatch(removeOrder(item._id))
    }

    return (
        <li className={s.item}>
            <div className={s.header}>
                <div className={s.placed}>
                    <p className={s.label}>ORDER PLACED</p>
                    {date}
                </div>
                <div className={s.total}>
                    <p className={s.label}>TOTAL</p>
                    <p>$ {item.totalPrice}</p>
                </div>
                <div className={s.count}>
                    <p>{item.totalCount} items</p>
                    <button className={s.remove} disabled={isRemoving} onClick={handleRemove}>
                        Remove order
                    </button>
                </div>
            </div>

            <div className={s.images}>
                {item.images.map(i => <img src={i} alt="order" key={i} />)}
            </div>
        </li>
    );
};

export default OrderItem;