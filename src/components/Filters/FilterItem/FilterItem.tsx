import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DropArrow } from '../../../assets/icons';
import { useAppSelector } from '../../../hooks/redux';
import { setActiveBrand } from '../../../store/slices/itemsSlice';
import s from "./FilterItem.module.scss"


const FilterItem: FC = () => {
    const dispatch = useDispatch()
    const { brands, activeBrand } = useAppSelector(state => state.items)

    const [visible, setVisible] = useState<boolean>(true)

    const toggleVisible = () => {
        setVisible(!visible)
    }


    const handleSetActive = (id: string) => {
        dispatch(setActiveBrand(id))
    }

    const handleAllBrands = () => {
        dispatch(setActiveBrand(null))
    }

    return (
        <div className={s.filter}>
            <div className={s.filterName} onClick={toggleVisible}>
                <h3>Brand</h3>
                <DropArrow
                    className={visible ? s.filterIcon : s.filterIcon + " " + s.filterIconRotated} />
            </div>


            {visible && <div className={s.filterItems}>
                <span className={!activeBrand ? s.filterItem + " " + s.filterItemActive : s.filterItem}
                    onClick={handleAllBrands}>
                    All
                </span>

                {brands.map(b => <span onClick={() => handleSetActive(b._id)}
                    className={activeBrand === b._id
                        ? s.filterItem + " " + s.filterItemActive
                        : s.filterItem}
                    key={b._id}>
                    {b.title}
                </span>)}
            </div>}
        </div>
    );
};

export default FilterItem;