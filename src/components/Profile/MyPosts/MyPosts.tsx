import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionTypes, MessageType} from '../../../redux/state';
import {addPostAC, changeNewPostTextAC} from '../../../redux/profileReducer';

type MyPostsPropsType = {
    posts: Array<MessageType>
    newPostElement: string
    dispatch: (action: ActionTypes)=> void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map((p) => <Post id={p.id} message={p.message} likes={p.likes}/>)

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const addPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea value={props.newPostElement} onChange={addPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}