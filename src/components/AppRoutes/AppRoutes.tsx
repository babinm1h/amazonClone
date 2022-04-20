import React from 'react';
import { Route, Routes } from 'react-router';
import Cart from '../../pages/Cart/Cart';
import CreateReview from '../../pages/CreateReview/CreateReview';
import Home from '../../pages/Home/Home';
import Orders from '../../pages/Orders/Orders';
import ProductPage from '../../pages/ProductPage/ProductPage';
import Products from '../../pages/Products/Products';
import Signin from '../../pages/Signin/Signin';
import Success from '../../pages/Success/Success';


export enum AllRoutes {
    home = "/",
    orders = "/orders",
    product = "/product",
    products = "/products",
    cart = "/cart",
    registr = "/registr",
    success = "/success",
    login = "/login",
    review = '/review',
}


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={AllRoutes.home} element={<Home />} />
            <Route path={AllRoutes.orders} element={<Orders />} />
            <Route path={AllRoutes.products + '/:categ'} element={<Products />} />
            <Route path={AllRoutes.product + "/:categ/:id"} element={<ProductPage />} />
            <Route path={AllRoutes.registr} element={<Signin />} />
            <Route path={AllRoutes.login} element={<Signin />} />
            <Route path={AllRoutes.cart} element={<Cart />} />
            <Route path={AllRoutes.products + "/:category"} element={<Products />} />
            <Route path={AllRoutes.success} element={<Success />} />
            <Route path={AllRoutes.review + "/:id"} element={<CreateReview />} />
        </Routes>
    );
};

export default AppRoutes;