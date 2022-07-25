import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    changeNewPostText: (postText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostElement={props.profilePage.newPostElement}
                     addPost={props.addPost}
                     changeNewPostText={props.changeNewPostText}/>
        </div>
    )
}