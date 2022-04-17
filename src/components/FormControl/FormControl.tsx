import React, { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import s from "./FormControl.module.scss"

interface IFormControlProps {
    id: string
    placeholder: string
    label: string
    type: "email" | "password" | "text"
    register: UseFormRegisterReturn
    errors: FieldError | undefined
}

const FormControl: FC<IFormControlProps> = ({ errors, id, placeholder, type, label, register }) => {


    return (
        <div className={s.control}>
            <label htmlFor={id}>
                {label}
            </label>

            <input type={type}
                placeholder={placeholder} id={id}
                {...register}
                className={errors ? s.input + " " + s.inputError : s.input} />

            {errors && <div className={s.error}>
                {errors.message}
            </div>}
        </div>
    );
};

export default FormControl;