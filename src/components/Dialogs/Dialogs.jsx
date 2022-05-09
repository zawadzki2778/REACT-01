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

    let dialogsData = [
        { id: 1, name: 'Максим' },
        { id: 2, name: 'Вита' },
        { id: 3, name: 'Женя' },
        { id: 4, name: 'Саша' },
        { id: 5, name: 'Жулик' },
        { id: 6, name: 'Реакт' }
    ];

    let messagesData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How is your react learning?' },
        { id: 3, message: 'Yo, its supper!' },
        { id: 4, message: 'Realy greate' },
        { id: 5, message: 'Ho ho ho' },
        { id: 6, message: 'My way of the Samurai' }
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name="Вита" id="2" />
                <DialogItem name="Женя" id="3" />
                <DialogItem name="Саша" id="4" />
                <DialogItem name="Жулик" id="5" />
                <DialogItem name="Реакт" id="6" />
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message} />
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