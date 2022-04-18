import React, { useEffect, useRef, useState } from 'react';
import { FillStar } from '../../assets/icons';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import SimilarList from '../../components/SimilarList/SimilarList';
import s from "./ProductPage.module.scss"
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import Reviews from '../../components/Reviews/Reviews';
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { fetchItem, fetchSimilar } from '../../store/thunks/itemPage';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import Rating from '../../components/Rating/Rating';



const ProductPage = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const { id, categ } = useParams() as { id: string, categ: string }

    const handleScroll = () => {
        if (scrollRef.current) {
            return scrollIntoView(scrollRef.current, {
                scrollMode: "if-needed", behavior: "smooth", block: "start"
            })
        }
    }

    const { isLoading, item, reviews, similarItems, rating } = useAppSelector(state => state.itemPage)
    const dispatch = useDispatch()

    const allRates = item?.reviews.map(i => i.rate)

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

                        <span className={s.rateCount} onClick={handleScroll}>
                            {reviews.length} ratings
                        </span>

                        <Rating avgRate={rating} allRates={allRates!} />


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

            <Reviews scrollRef={scrollRef} itemId={id} />

        </DefaultLayout>
    );
};

export default ProductPage;