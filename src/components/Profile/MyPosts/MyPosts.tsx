import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MessageType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<MessageType>
    newPostElement: string
    addPost: (postText: string) => void
    changeNewPostText: (postText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map((p) => <Post id={p.id} message={p.message} likes={p.likes}/>)

    const addPost = () => {
        props.addPost(props.newPostElement)
    }

    const addPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostText(e.currentTarget.value)
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