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
    let dialogs = [
        { id: 1, name: 'Максим' },
        { id: 2, name: 'Вита' },
        { id: 3, name: 'Женя' },
        { id: 4, name: 'Саша' },
        { id: 5, name: 'Жулик' },
        { id: 6, name: 'Реакт' }
    ];
    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How is your react learning?' },
        { id: 3, message: 'Yo, its supper!' },
        { id: 4, message: 'Realy greate' },
        { id: 5, message: 'Ho ho ho' },
        { id: 6, message: 'My way of the Samurai' }
    ];
    //полная, не сокращённая запись метода map:
    let dialogsElements = dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} />
        )
    });
    //запись метода map без return и лишних скобок:
    let messagesElements = messages.map(messages => <Message message={messages.message} />);
       
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}  
            </div>
        </div>
    )
};
export default Dialogs;