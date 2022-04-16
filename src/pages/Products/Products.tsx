import React from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import FilterItem from '../../components/FilterItem/FilterItem';
import Product from '../../components/Product/Product';
import { sortOptions } from '../../utils/data';
import s from "./Products.module.scss"



const Products = () => {
    return (
        <DefaultLayout>
            <div className={s.header}>
                <h1 className={s.titleFor}>Results for <span>"keyboard"</span></h1>
                <div className={s.sort}>
                    <label htmlFor="sort">Sort by: </label>
                    <select name="sort" id="sort">
                        {sortOptions.map(s => <option value={s.value} key={s.value}>
                            {s.title}
                        </option>)}
                    </select>
                </div>
            </div>


            <section className={s.section}>
                <div className={s.filters}>
                    <div className={s.filtersHeader}>filters</div>
                    <FilterItem />
                </div>


                <ul className={s.list}>
                    <Product />
                </ul>
            </section>
        </DefaultLayout>
    );
};

export default Products;