import React, { FC } from 'react';
import Header from '../Header/Header';
import s from "./DefaultLayout.module.scss"

const DefaultLayout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className={s.main}>
                {children}
            </main>
        </>
    );
};

export default DefaultLayout;