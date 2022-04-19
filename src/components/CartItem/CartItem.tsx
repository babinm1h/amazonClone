import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { decrQuan, deleteCartItem, incrQuan } from '../../store/thunks/cart';
import { ICartItem } from '../../types/models';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import s from "./CartItem.module.scss"

interface ICartItemProps {
    item: ICartItem
}

const CartItem: FC<ICartItemProps> = ({ item }) => {

    const { inProgress } = useAppSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartItem(item._id))
    }

    const handleIncr = () => {
        if (item.quan < 100) dispatch(incrQuan(item._id))
    }

    const handleDecr = () => {
        if (item.quan > 1) dispatch(decrQuan(item._id))
    }

    return (
        <li className={s.item}>
            <NavLink to={AllRoutes.product + `/${item.item.category}/${item.item._id}`}>
                <img src={item.item.img} alt={item.item.title}
                    className={s.img} />
            </NavLink>
            <div className={s.itemInfo}>
                <NavLink to={AllRoutes.product + `/${item.item.category}/${item.item._id}`}>
                    <h3 className={s.itemTitle}>{item.item.title}</h3>
                </NavLink>
                <div className={s.note}>
                    Usually ships within 6 to 10 days.
                </div>
                <div className={s.quan}>
                    Quantity: {item.quan}
                </div>
                <ul className={s.actions}>
                    <li>
                        <button className={s.action} onClick={handleDelete}
                            disabled={inProgress}>
                            Delete
                        </button>
                    </li>
                    <li>
                        <button className={s.action} onClick={handleIncr}
                            disabled={inProgress}>
                            Add one
                        </button>
                    </li>
                    <li>
                        <button className={s.action} onClick={handleDecr}
                            disabled={inProgress}>
                            Remove one
                        </button>
                    </li>
                </ul>
            </div>
            <div className={s.itemPrice}>
                $ {item.item.price}
            </div>
        </li>
    );
};

export default CartItem;