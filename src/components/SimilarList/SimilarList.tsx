import React from 'react';
import SimilarItem from './SimilarItem/SimilarItem';
import s from "./SimilarList.module.scss"

const SimilarList = () => {
    return (
        <div className={s.similar}>
            <h3>Products related to this item</h3>
            <ul className={s.items}>
                <SimilarItem />
                <SimilarItem />
                <SimilarItem />
                <SimilarItem />
            </ul>
        </div>
    );
};

export default SimilarList;