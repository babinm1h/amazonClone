import { useState } from 'react';
import s from "./Header.module.scss"
import logo from "../../assets/logo.png"
import { BurgerIcon, CartIcon, MapIcon, MenuIcon, SearchIcon, UserIcon } from '../../assets/icons';
import Popup from '../Popup/Popup';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import Sidebar from './Sidebar/Sidebar';

const Header = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [sidebar, setSidebar] = useState<boolean>(false)

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
                            <li className={s.actionItem + " " + s.account} onMouseLeave={handleHide}
                                onMouseEnter={handleShow}>
                                <p>Hello, Sign In</p>
                                <div className={s.actionTitle}>Account & Lists</div>

                                {visible && <Popup mt="10px">
                                    <NavLink to={AllRoutes.auth}>
                                        <button className={s.authBtn}>Sign In</button>
                                    </NavLink>
                                    <div className={s.hint}>New customer? <span>Start here.</span></div>
                                </Popup>}
                            </li>
                            <li className={s.actionItem + " " + s.orders}>
                                <NavLink to={AllRoutes.orders}>
                                    <p>Returns</p>
                                    <div className={s.actionTitle}>& Orders</div>
                                </NavLink>
                            </li>
                            <li className={s.user}>
                                <NavLink to={AllRoutes.auth}>
                                    <span>m1hbbn@yandex.ru</span>
                                    <UserIcon color={`white`} size={24} />
                                </NavLink>
                            </li>
                            <li className={s.actionItem}>
                                <NavLink to={AllRoutes.cart}>
                                    <div className={s.cartBlock}>
                                        <div className={s.cartIcon}>
                                            <CartIcon size={35} />
                                            <span className={s.cartCount}>78</span>
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
                        <li className={s.linkItem}>
                            <div className={s.burger}>
                                <BurgerIcon color="white" size={17} className={s.burgerIcon} />
                                All
                            </div>
                        </li>
                        <li className={s.linkItem}>Today deals</li>
                        <li className={s.linkItem}>Sell</li>
                        <li className={s.linkItem}>Something</li>
                    </ul>
                </div>

            </header>

            {sidebar && <Sidebar handleClose={handleClose} />}
        </>
    );
};

export default Header;