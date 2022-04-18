import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { setMaxPrice } from '../../store/slices/itemsSlice';
import Loader from '../Loader/Loader';
import FilterItem from './FilterItem/FilterItem';
import s from "./Filters.module.scss"

interface IFormFields {
    max: number
}

const Filters = () => {
    const dispatch = useDispatch()
    const { brandsLoading } = useAppSelector(state => state.items)

    const { register, handleSubmit, formState: { isValid } } = useForm<IFormFields>({ mode: `onChange` })

    const onSubmit: SubmitHandler<IFormFields> = ({ max }) => {
        dispatch(setMaxPrice(max))
    }


    return (
        <div className={s.filters}>
            <div className={s.filtersHeader}>filters</div>
            {brandsLoading
                ? <Loader />
                : <FilterItem />}


            <div className={s.price}>
                <h3>Max Price filter</h3>
                <form action="" onSubmit={handleSubmit(onSubmit)} className={s.form}>

                    <input {...register("max", { required: true })}
                        id="max" placeholder="$ Max Price" type="number"
                        min={0} defaultValue={100000}
                        max={1000000} />

                    <button type="submit" className={s.goBtn}
                        disabled={!isValid}>
                        GO
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Filters;