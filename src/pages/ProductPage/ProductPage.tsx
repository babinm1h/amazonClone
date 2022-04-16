import React, { useRef, useState } from 'react';
import { FillStar } from '../../assets/icons';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import SimilarList from '../../components/SimilarList/SimilarList';
import s from "./ProductPage.module.scss"
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import Reviews from '../../components/Reviews/Reviews';
import Popup from '../../components/Popup/Popup';
import { stars } from '../../utils/data';

const rate = [4, 4, 4, 4, 4, 4, 3, 3, 3, 1]

const count = {} as any
rate.forEach(e => {
    count[e] = (count[e] || 0) + 1
});
console.log(count);



const r = Math.round(rate.reduce((prev, cur) => cur + prev, 0) / rate.length)


const ProductPage = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [tooltip, setTooltip] = useState<boolean>(false)

    const handleScroll = () => {
        if (scrollRef.current) {
            return scrollIntoView(scrollRef.current, {
                scrollMode: "if-needed", behavior: "smooth", block: "start"
            })
        }
    }

    const handleShow = () => {
        setTooltip(true)
    }

    const handleHide = () => {
        setTooltip(false)
    }

    return (
        <DefaultLayout>
            <div className={s.content}>
                <div className={s.product}>
                    <div className={s.productImg}>
                        <img src="https://m.media-amazon.com/images/I/711y8vC4+nL._AC_UY218_.jpg"
                            alt="item" />
                    </div>
                    <div className={s.productInfo}>
                        <h1>
                            Fiodio 61 Keys RGB Wireless and Wired Mechanical Gaming Keyboard with Blue Switches, Audible Click Sound Rainbow Portable Compact Mini Office Keyboard for Windows PC Fiodio 61 Keys RGB Wireless and Wired Mechanical Gaming Keyboard with Blue Switches, Audible Click Sound Rainbow Portable Compact Mini Office Keyboard for Windows PC
                        </h1>


                        <div className={s.productRating}>
                            <span className={s.stars} onMouseEnter={handleShow}
                                onMouseLeave={handleHide}>
                                {[...Array(5)].map((star, i) => <FillStar className={s.star}
                                    key={i} color={i + 1 <= r ? "#c45500" : "#999"} />)}


                                {tooltip && <Popup mt="3px">
                                    <div className={s.title}>10 global ratings</div>
                                    <ul className={s.starsList}>
                                        {stars.map(star => <li key={star}>
                                            <span>{star} stars</span>
                                            <FillStar color={"#c45500"} />: {count[star] || 0} votes
                                        </li>)}
                                    </ul>
                                </Popup>}


                            </span>
                            <span className={s.rateCount} onClick={handleScroll}>10 ratings</span>
                        </div>


                        <div className={s.productPrice}>
                            Price: <span>$ 77.99</span>
                        </div>
                    </div>
                </div>



                <div className={s.block}>
                    <div className={s.blockContent}>
                        <div className={s.productPrice}>
                            <span>$ 77.99</span>
                        </div>
                        <p>Usually ships within 6 to 10 days.</p>
                        <button className={s.btn + " " + s.addBtn}>
                            Add to Cart
                        </button>
                        <button className={s.btn + " " + s.buyBtn}>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            <SimilarList />

            <Reviews scrollRef={scrollRef} />

        </DefaultLayout>
    );
};

export default ProductPage;