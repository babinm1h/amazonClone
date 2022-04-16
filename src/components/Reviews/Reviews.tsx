import React, { FC, RefObject, useState } from 'react';
import { FillStar } from '../../assets/icons';
import { stars } from '../../utils/data';
import s from "./Reviews.module.scss"

interface IReviewsProps {
    scrollRef: RefObject<HTMLDivElement>
}

const Reviews: FC<IReviewsProps> = ({ scrollRef }) => {
    const [rating, setRating] = useState<number | null>(null)


    return (
        <div ref={scrollRef} className={s.reviews}>
            <h3 className={s.label}>Customer reviews</h3>
            <div className={s.rate}>
                <p>Rate this product</p>
                {stars.map((star, i) => <FillStar className={s.star} key={star}
                    color={rating! >= star ? "#c45500" : "#999"}
                    onClick={() => setRating(star)}
                    title={star.toString()} />)}
            </div>
            <form action="" className={s.form}>
                <textarea placeholder="Your review..." className={s.textarea} />
                <button className={s.btn}>Create Review</button>
            </form>
        </div>
    );
};

export default Reviews;