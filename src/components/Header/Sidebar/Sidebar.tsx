import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CloseIcon, UserIcon } from '../../../assets/icons';
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import s from "./Sidebar.module.scss"

interface ISidebarProps {
    handleClose: () => void
    isAuth: boolean
    handleLogout: () => void
}

const Sidebar: FC<ISidebarProps> = ({ handleClose, isAuth, handleLogout }) => {
    return (
        <div className={s.layout}>
            <div className={s.close} onClick={handleClose}>
                <CloseIcon color="white" size={35} />
            </div>
            <div className={s.container}>
                <nav className={s.nav}>
                    <div className={s.header}>
                        <div className={s.auth}>
                            {isAuth
                                ? <>
                                    <span onClick={handleLogout}>Logout</span>
                                    <UserIcon color="white" size={22} />
                                </>
                                : <NavLink to={AllRoutes.login}>
                                    <span>Sign in</span> <UserIcon color="white" size={22} />
                                </NavLink>}
                        </div>
                        <div className={s.title}>
                            <p>Browse</p>
                            <p>Amazon</p>
                        </div>
                    </div>

                    <div className={s.block}>
                        <div className={s.blockTitle}>
                            <NavLink to={AllRoutes.home}>Amazon Home</NavLink>
                        </div>
                    </div>

                    <div className={s.block}>
                        <div className={s.blockTitle}>
                            {isAuth
                                ? <NavLink to={AllRoutes.orders}>Orders</NavLink>
                                : <NavLink to={AllRoutes.login}>Orders</NavLink>}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;