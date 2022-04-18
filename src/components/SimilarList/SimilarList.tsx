import React, { FC } from 'react';
import { useParams } from 'react-router';
import { IItem } from '../../types/models';
import SimilarItem from './SimilarItem/SimilarItem';
import s from "./SimilarList.module.scss"

interface ISimilarListProps {
    items: IItem[]
}

const SimilarList: FC<ISimilarListProps> = ({ items }) => {

    const { id } = useParams() as { id: string }

    return (
        <div className={s.similar}>
            <h3>Products related to this item</h3>
            <ul className={s.items}>
                {items.filter(i => i._id !== id).slice(0, 5)
                    .map(i => <SimilarItem item={i} key={i._id} />)}
            </ul>
        </div>
    );
};

export default SimilarList;