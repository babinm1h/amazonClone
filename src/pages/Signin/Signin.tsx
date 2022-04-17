import s from "./Signin.module.scss"
import { AllRoutes } from "../../components/AppRoutes/AppRoutes";
import RegistrForm from "../../components/AuthForms/RegistrForm";
import { useLocation } from "react-router";
import SigninForm from "../../components/AuthForms/SigninForm";
import { NavLink } from "react-router-dom";



const Signin = () => {
    const location = useLocation()


    return (
        <div className={s.container}>
            <div>
                <NavLink to={AllRoutes.home}>
                    <img src="https://i0.wp.com/www.snowdropsolution.com/wp-content/uploads/2020/03/Amazon-Jeff-Bezos-And-Collecting-Data-DW-Documentary.png?fit=1920%2C1080&ssl=1" alt="logo" className={s.logo} />
                </NavLink>
            </div>

            <div className={s.block}>
                {location.pathname === `${AllRoutes.login}`
                    ? <>
                        <h1>Sign-in</h1>
                        <SigninForm />
                    </>

                    : <>
                        <h1>Create account</h1>
                        <RegistrForm />
                    </>
                }
            </div>

            <div className={s.footer}>
                © 1996-2022, Amazon.com, Babin Mihail 2022
            </div>
        </div>
    );
};

export default Signin;