import React, { useState } from 'react';
import { FillStar } from '../../assets/icons';
import { createReview } from '../../store/thunks/itemPage';
import { stars } from '../../utils/data';
import { valid } from '../../utils/validation';
import s from "./CreateReview.module.scss"
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../hooks/redux';



interface IFormFields {
    text: string
}


const CreateReview = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { reviewError, isAddingReview } = useAppSelector(state => state.itemPage)

    const [rating, setRating] = useState<number | null>(null)

    const { id } = useParams() as { id: string }

    const { register, handleSubmit, reset, formState: { isValid } }
        = useForm<IFormFields>({ mode: "onChange" })


    const onSubmit: SubmitHandler<IFormFields> = ({ text }) => {
        dispatch(createReview({ text, rate: rating!, id }))
        setRating(null)
        reset()
    }


    const handleBack = () => {
        return nav(-1)
    }

    return (
        <DefaultLayout>
            <div className={s.container}>

                <div className={s.breadcrumbs}>
                    <span onClick={handleBack}>Back to product</span>
                </div>

                <div className={s.rate}>
                    <h1>Rate this product</h1>
                    {stars.map((star, i) => <FillStar className={s.star} key={star}
                        color={rating! >= star ? "#c45500" : "#999"}
                        onClick={() => setRating(star)}
                        title={star.toString()} />)}
                </div>


                <form action="" className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <textarea placeholder="Your review..."
                        {...register("text", valid(1000, 1))}
                        className={s.textarea} />

                    {reviewError && <div className={s.error}>{reviewError}</div>}

                    <button className={s.btn} disabled={!rating || !isValid || isAddingReview}>
                        Create Review
                    </button>
                </form>
            </div>
        </DefaultLayout>
    );
};

export default CreateReview;