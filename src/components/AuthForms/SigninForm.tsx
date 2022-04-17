import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { valid } from '../../utils/validation';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import FormControl from '../FormControl/FormControl';
import s from "../../pages/Signin/Signin.module.scss"
import { useDispatch } from 'react-redux';
import { login } from '../../store/thunks/auth';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router';



interface IFormFields {
    email: string
    password: string
}

const RegistrForm = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, loginError } = useAppSelector(state => state.auth)

    const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitting, isDirty } }
        = useForm<IFormFields>()


    const onSubmit: SubmitHandler<IFormFields> = async ({ email, password }) => {
        dispatch(login({ email, password }))
    }

    useEffect(() => {
        if (isAuth) nav(AllRoutes.home)
    }, [isAuth]);

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <FormControl register={register("email", valid(40))}
                    errors={errors.email} id="email"
                    label="Your email"
                    placeholder="Email"
                    type="email" />

                <FormControl register={register("password", valid(30))}
                    errors={errors.password} id="password"
                    label="Your password"
                    placeholder="Password"
                    type="password" />

                {loginError && <div className={s.error}>{loginError}</div>}

                <button type="submit" className={s.btn} disabled={isSubmitting}>
                    Sign In
                </button>

                <div className={s.note}>
                    Dont have an account?
                    <NavLink to={AllRoutes.registr}>
                        Create account
                    </NavLink>
                </div>
            </form>
        </>
    );
};

export default RegistrForm;