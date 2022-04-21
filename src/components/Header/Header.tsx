import { useState } from 'react';
import s from "./Header.module.scss"
import logo from "../../assets/logo.png"
import { CartIcon, MapIcon, MenuIcon, SearchIcon, UserIcon } from '../../assets/icons';
import Popup from '../Popup/Popup';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import Sidebar from './Sidebar/Sidebar';
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/thunks/auth';
import { cartLogout } from '../../store/slices/cartSlice';
import { ordersLogout } from '../../store/slices/ordersSlice';

const Header = () => {
    const dispatch = useDispatch()

    const [visible, setVisible] = useState<boolean>(false)
    const [sidebar, setSidebar] = useState<boolean>(false)

    const { user, isAuth } = useAppSelector(state => state.auth)

    const { totalCount } = useAppSelector(state => state.cart)

    const handleShow = () => {
        setVisible(true)
    }
    const handleHide = (e: any) => {
        setVisible(false)
    }


    const handleOpen = () => {
        setSidebar(true)
    }
    const handleClose = () => {
        setSidebar(false)
    }

    const handleLogout = () => {
        dispatch(logout())
        dispatch(cartLogout())
        dispatch(ordersLogout())
        if (sidebar) {
            handleClose()
        }
    }


    return (
        <>
            <header className={s.header}>
                <div className={s.top}>
                    <div className={s.left}>
                        <div className={s.burger} onClick={handleOpen}>
                            <MenuIcon color={"white"} size={24} />
                        </div>
                        <NavLink to={AllRoutes.home}>
                            <img className={s.logo} src={logo} alt="logo" />
                        </NavLink>
                        <div className={s.location}>
                            <MapIcon /> <p>Russian Federation</p>
                        </div>
                    </div>
                    <div className={s.center}>
                        <form className={s.inputContainer}>
                            <input type="text" className={s.input} />
                            <button className={s.btn} type="submit">
                                <SearchIcon size={20} />
                            </button>
                        </form>
                    </div>
                    <div className={s.right}>
                        <ul className={s.actionList}>
                            <li className={s.actionItem + " " + s.account}
                                onMouseLeave={handleHide}
                                onMouseEnter={handleShow}>

                                {isAuth
                                    ? <>
                                        <p>Hello, {user?.email}</p>
                                        <div className={s.actionTitle}>Account & Lists</div>
                                    </>
                                    : <NavLink to={AllRoutes.login}>
                                        <p>Hello, Sign In</p>
                                        <div className={s.actionTitle}>Account & Lists</div>
                                    </NavLink>}


                                {visible && <Popup mt="10px">
                                    {isAuth
                                        ? <>
                                            <div className={s.username}>{user?.email}</div>
                                            <button className={s.authBtn} onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </>
                                        : <>
                                            <NavLink to={AllRoutes.login}>
                                                <button className={s.authBtn}>Sign In</button>
                                            </NavLink>
                                            <div className={s.hint}>New customer?
                                                <NavLink to={AllRoutes.registr}>
                                                    <span>Start here.</span>
                                                </NavLink>
                                            </div>
                                        </>}
                                </Popup>}


                            </li>
                            <li className={s.actionItem + " " + s.orders}>
                                {isAuth
                                    ? <NavLink to={AllRoutes.orders}>
                                        <p>Returns</p>
                                        <div className={s.actionTitle}>& Orders</div>
                                    </NavLink>
                                    : <NavLink to={AllRoutes.login}>
                                        <p>Returns</p>
                                        <div className={s.actionTitle}>& Orders</div>
                                    </NavLink>}
                            </li>
                            <li className={s.user}>
                                {isAuth
                                    ? <>
                                        <span>{user?.email}</span>
                                        <UserIcon color={`white`} size={24} />
                                    </>
                                    : <NavLink to={AllRoutes.login}>
                                        <span>Sign in</span>
                                        <UserIcon color={`white`} size={24} />
                                    </NavLink>}
                            </li>
                            <li className={s.actionItem}>
                                <NavLink to={AllRoutes.cart}>
                                    <div className={s.cartBlock}>
                                        <div className={s.cartIcon}>
                                            <CartIcon size={35} />
                                            <span className={s.cartCount}>{totalCount}</span>
                                        </div>
                                        <div className={s.actionTitle}>Cart</div>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={s.bottom}>
                    <ul className={s.linkList}>
                        <li className={s.linkItem}> All</li>
                        <li className={s.linkItem}>Today deals</li>
                        <li className={s.linkItem}>Sell</li>
                        <li className={s.linkItem}>Something</li>
                    </ul>
                </div>

            </header>

            {sidebar && <Sidebar
                handleClose={handleClose}
                isAuth={isAuth}
                handleLogout={handleLogout} />}
        </>
    );
};

export default Header;