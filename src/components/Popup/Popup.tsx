import React, { FC } from 'react';
import s from "./Popup.module.scss"

interface IPopupProps {
    mt: string
}

const Popup: FC<IPopupProps> = ({ children, mt }) => {
    return (
        <div className={s.popup} style={{ marginTop: mt }}>
            <div className={s.popupContent}>
                {children}
            </div>
        </div>
    );
};

export default Popup;