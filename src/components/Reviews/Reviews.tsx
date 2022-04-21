import { FC, RefObject } from 'react';
import { NavLink } from 'react-router-dom';
import { FillStar } from '../../assets/icons';
import { useAppSelector } from '../../hooks/redux';
import { formatDate } from '../../utils/formatDate';
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

            <NavLink to={isAuth ? AllRoutes.review + `/${itemId}` : AllRoutes.login}>
                <button className={s.writeBtn}>
                    Write customer review
                </button>
            </NavLink>


            <ul className={s.list}>
                {reviews.map(r => <li className={s.item} key={r._id}>

                    <div className={s.itemTop}>
                        <div className={s.stars}>
                            {[...Array(r.rate)].map((star, index) => <FillStar className={s.star}
                                key={index} />)}
                        </div>

                        <span className={s.date}>
                            {formatDate(r.createdAt)}
                        </span>
                    </div>

                    <p className={s.text}>
                        {r.text}
                    </p>

                </li>)}
            </ul>
        </div>
    );
};

export default Reviews;