import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props ) => { // props - он же stateApp, перданный из index.js
    //полная, не сокращённая запись метода map:
    let dialogsElements = props.state.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} />
        )
    });
    //запись метода map без return и лишних скобок:
    let messagesElements = props.state.messages.map(messages => 
    <Message message={messages.message} />);
       
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