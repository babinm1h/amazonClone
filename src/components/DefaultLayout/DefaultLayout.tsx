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
            <footer className={s.footer}>
                <div>Babin Mihail 2022</div>
            </footer>
        </>
    );
};

export default DefaultLayout;