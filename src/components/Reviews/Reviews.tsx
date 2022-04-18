import { FC, RefObject } from 'react';
import { NavLink } from 'react-router-dom';
import { FillStar } from '../../assets/icons';
import { useAppSelector } from '../../hooks/redux';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import s from "./Reviews.module.scss"



interface IReviewsProps {
    scrollRef: RefObject<HTMLDivElement>
    itemId: string
}

const Reviews: FC<IReviewsProps> = ({ scrollRef, itemId }) => {

    const { reviews } = useAppSelector(state => state.itemPage)
    const { isAuth } = useAppSelector(state => state.auth)


    return (
        <div ref={scrollRef} className={s.reviews}>
            <h3 className={s.label}>Customer reviews</h3>

            <NavLink to={AllRoutes.review + `/${itemId}`}>
                <button className={s.writeBtn}>
                    Write customer review
                </button>
            </NavLink>

            <ul className={s.list}>
                {reviews.map(r => <li className={s.item}>
                    {[...Array(r.rate)].map(star => <FillStar className={s.star} />)}
                    <p className={s.text}>
                        {r.text}
                    </p>
                </li>)}
            </ul>
        </div>
    );
};

export default Reviews;