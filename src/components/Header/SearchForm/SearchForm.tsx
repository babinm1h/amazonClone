import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { SearchIcon } from '../../../assets/icons';
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import s from "./SearchForm.module.scss"

interface IFormFields {
    search: string
}

const SearchForm = () => {
    const nav = useNavigate()
    const location = useLocation()

    const [searchParams, setSearchParams] = useSearchParams()

    const { register, handleSubmit } = useForm<IFormFields>()


    const onSubmit: SubmitHandler<IFormFields> = ({ search }) => {
        if (!search.length) return
        setSearchParams({ search: search })

        if (!location.pathname.includes("/products")) {
            nav(AllRoutes.products + `?search=${search}`)
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