import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi! How are you?', likeCount: 5},
        {id: 2, message: 'Hi! How are you?', likeCount: 17},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post id={postData[0].id} message={postData[0].message} likeCount={postData[0].likeCount} />
                <Post message='Its my first post)' likeCount='17' />
            </div>
        </div>
    )
};

export default MyPosts;
