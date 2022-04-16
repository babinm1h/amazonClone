import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckIcon } from '../../assets/icons';
import { AllRoutes } from '../../components/AppRoutes/AppRoutes';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import s from "./Success.module.scss"

const Success = () => {
    return (
        <DefaultLayout>

            <div className={s.container}>
                <main className={s.main}>
                    <div className={s.block}>
                        <div className={s.header}>
                            <CheckIcon size={22} color={"lime"} />
                            <h1>Thank you, your order has been confirmed!</h1>
                        </div>
                        <p className={s.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nihil mollitia. Maxime, omnis? Dolore quod sint ipsam, accusantium aliquid labore, expedita soluta ipsum voluptas voluptatem quaerat facilis quibusdam exercitationem voluptates.
                        </p>
                        <NavLink to={AllRoutes.orders}>
                            <button className={s.btn}>
                                Go to my orders!
                            </button>
                        </NavLink>
                    </div>
                </main>
            </div >

        </DefaultLayout >
    );
};

export default Success;