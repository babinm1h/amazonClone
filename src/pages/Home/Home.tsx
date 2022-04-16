import React from 'react';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../../components/AppRoutes/AppRoutes';
import Banner from '../../components/Banner/Banner';
import CategoryBlock from '../../components/CategoryBlock/CategoryBlock';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import { categories } from '../../utils/data';
import s from './Home.module.scss'

const Home = () => {
    return (
        <>
            <DefaultLayout>
                <div className={s.background}>
                    <Banner />
                    <ul className={s.list}>
                        {categories.map(c => <CategoryBlock item={c} key={c.id} />)}
                    </ul>

                    <div className={s.banner}>
                        <div className={s.title}>Sign in for the best experience</div>
                        <NavLink to={AllRoutes.auth}>
                            <button className={s.button}>Sign In Securely</button>
                        </NavLink>
                        <NavLink to={AllRoutes.auth}>
                            <span>Create an account</span>
                        </NavLink>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Home;