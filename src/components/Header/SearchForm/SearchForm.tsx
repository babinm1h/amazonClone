import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { SearchIcon } from '../../../assets/icons';
import { setSearch } from '../../../store/slices/itemsSlice';
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import s from "./SearchForm.module.scss"

interface IFormFields {
    search: string
}

const SearchForm = () => {
    const nav = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const { register, handleSubmit, reset } = useForm<IFormFields>()


    const onSubmit: SubmitHandler<IFormFields> = ({ search }) => {
        if (!search.length) return

        dispatch(setSearch(search))
        reset()

        if (!location.pathname.includes("/products")) {
            nav(AllRoutes.products + `/search/${search}`)
        }
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

            <input type="text" className={s.input} {...register("search")} />

            <button className={s.btn} type="submit">
                <SearchIcon size={20} />
            </button>
        </form>
    );
};

export default SearchForm;