import React, { FC, useState } from 'react';
import { FillStar } from '../../assets/icons';
import { stars } from '../../utils/data';
import Popup from '../Popup/Popup';
import s from "./Rating.module.scss"


// const rate = [4, 4, 4, 4, 4, 4, 3, 3, 3, 1]

// const allRates = {} as any
// rate.forEach(e => {
//     allRates[e] = (allRates[e] || 0) + 1
// });
// console.log(allRates);


// const avg= Math.round(rate.reduce((prev, cur) => cur + prev, 0) / rate.length)


interface IRatingProps {
    avgRate: number
    allRates: number[]
}

const Rating: FC<IRatingProps> = ({ avgRate, allRates }) => {
    const [tooltip, setTooltip] = useState<boolean>(false)


    const handleShow = () => {
        setTooltip(true)
    }

    const handleHide = () => {
        setTooltip(false)
    }


    const rateCount = {} as any
    allRates.forEach(r => {
        rateCount[r] = (rateCount[r] || 0) + 1
    })


    return (
        <div className={s.productRating}>
            <span className={s.stars} onMouseEnter={handleShow}
                onMouseLeave={handleHide}>
                {[...Array(5)].map((star, i) => <FillStar className={s.star}
                    key={i} color={i + 1 <= avgRate ? "#c45500" : "#999"} />)}


                {tooltip && <Popup mt="3px">
                    <div className={s.title}>Global ratings</div>
                    <ul className={s.starsList}>
                        {stars.map(star => <li key={star}>
                            <span>{star} stars</span>
                            <FillStar color={"#c45500"} />: {rateCount[star] || 0} votes
                        </li>)}
                    </ul>
                </Popup>}


            </span>
        </div>
    );
};

export default Rating;