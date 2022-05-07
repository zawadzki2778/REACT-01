import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <span> {props.message} Like: {props.likeCount} </span>
            </div>
            <img src="https://www.blexar.com/avatar.png" alt="panda"/>
        </div>
    )
};

export default Post;