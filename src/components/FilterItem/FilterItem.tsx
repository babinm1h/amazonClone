import React, { useState } from 'react';
import { DropArrow } from '../../assets/icons';
import s from "./FilterItem.module.scss"

const FilterItem = () => {
    const [visible, setVisible] = useState<boolean>(true)

    const toggleVisible = () => {
        setVisible(!visible)
    }

    return (
        <div className={s.filter}>
            <div className={s.filterName} onClick={toggleVisible}>
                <h3>Brand</h3>
                <DropArrow
                    className={visible ? s.filterIcon : s.filterIcon + " " + s.filterIconRotated} />
            </div>
            {visible && <div className={s.filterItems}>
                <span className={s.filterItem + " " + s.filterItemActive}>Zowie</span>
                <span className={s.filterItem}>Alienware</span>
                <span className={s.filterItem}>Hp</span>
                <span className={s.filterItem}>Asus</span>
                <span className={s.filterItem}>Zowie Movie</span>
                <span className={s.filterItem}>Zowie</span>
                <span className={s.filterItem}>Faster</span>
            </div>}
        </div>
    );
};

export default FilterItem;