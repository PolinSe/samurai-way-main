import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MessageType} from '../../redux/state';

type ProfileType = {
    posts: Array<MessageType>
    addPost: (postText: string) => void
}
export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}