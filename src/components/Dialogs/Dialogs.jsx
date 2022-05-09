import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Максим" id="1" />
                <DialogItem name="Вита" id="2" />
                <DialogItem name="Женя" id="3" />
                <DialogItem name="Саша" id="4" />
                <DialogItem name="Жулик" id="5" />
                <DialogItem name="Реакт" id="6" />
            </div>

            <div className={s.messages}>
                <Message message="Hello" />
                <Message message="How is your react learning?" />
                <Message message="Yo, it's supper!" />
                <Message message="Realy greate" />
                <Message message="Ho ho ho)" />
                <Message message="My way of the Samurai" />
            </div>
        </div>
    )
};

export default Dialogs;