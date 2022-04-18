import React, { useEffect, useRef, useState } from 'react';
import { FillStar } from '../../assets/icons';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import SimilarList from '../../components/SimilarList/SimilarList';
import s from "./ProductPage.module.scss"
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import Reviews from '../../components/Reviews/Reviews';
import Popup from '../../components/Popup/Popup';
import { stars } from '../../utils/data';
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { fetchItem, fetchSimilar } from '../../store/thunks/itemPage';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';

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

    const { id, categ } = useParams() as { id: string, categ: string }

    const { isLoading, item, reviews, similarItems } = useAppSelector(state => state.itemPage)
    const dispatch = useDispatch()

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


    useEffect(() => {
        if (id && categ) {
            dispatch(fetchItem(id))
            dispatch(fetchSimilar(categ))
        }
    }, [dispatch, id, categ])


    if (isLoading) {
        return <div className="loader_centered"><Loader /></div>
    }

    return (
        <DefaultLayout>
            <div className={s.content}>
                <div className={s.product}>
                    <div className={s.productImg}>
                        <img src={item?.img}
                            alt="item" />
                    </div>
                    <div className={s.productInfo}>
                        <h1>
                            {item?.title}
                        </h1>

                        <div className={s.brand}>
                            Brand: <span>{item?.brand.title}</span>
                        </div>

                        <div className={s.productRating}>
                            <span className={s.stars} onMouseEnter={handleShow}
                                onMouseLeave={handleHide}>
                                {[...Array(5)].map((star, i) => <FillStar className={s.star}
                                    key={i} color={i + 1 <= r ? "#c45500" : "#999"} />)}


                                {tooltip && <Popup mt="3px">
                                    <div className={s.title}>Global ratings</div>
                                    <ul className={s.starsList}>
                                        {stars.map(star => <li key={star}>
                                            <span>{star} stars</span>
                                            <FillStar color={"#c45500"} />: {count[star] || 0} votes
                                        </li>)}
                                    </ul>
                                </Popup>}


                            </span>
                            <span className={s.rateCount} onClick={handleScroll}>
                                {reviews.length} ratings
                            </span>
                        </div>


                        <div className={s.productPrice}>
                            Price: <span>$ 77.99</span>
                        </div>
                    </div>
                </div>



                <div className={s.block}>
                    <div className={s.blockContent}>
                        <div className={s.productPrice}>
                            <span>$ {item?.price}</span>
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

            <SimilarList items={similarItems} />

            <Reviews scrollRef={scrollRef} />

        </DefaultLayout>
    );
};

export default ProductPage;