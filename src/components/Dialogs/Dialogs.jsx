import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Maksim</div>
                <div className={s.dialog + ' ' + s.active}>Vita</div>
                <div className={s.dialog}>Denis</div>
                <div className={s.dialog}>Evgeniy</div>
                <div className={s.dialog}>Julick</div>
                <div className={s.dialog}>Vera</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How is your react learning?</div>
                <div className={s.message}>Yo, its supper</div>
            </div>
        </div>
    )
};

export default Dialogs;