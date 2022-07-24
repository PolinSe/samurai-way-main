import {rerenderEntireTree} from '../render';

export type MessageType = {
    id: number
    message: string
    likes: number
}
export type DialogsType = {
    id: number
    name: string
    image: string
}
export type MessagesType = {
    id: number
    message: string
}
export type FriendType = {
    id: number
    name: string
    image: string
}
export type ProfilePageType = {
    posts: Array<MessageType>
    newPostElement: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageElement: string
}
export type SidebarType = {
    friends: Array<FriendType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likes: 15},
            {id: 2, message: 'It\'s my first post!', likes: 20},
            {id: 3, message: 'Blabla', likes: 20},
            {id: 4, message: 'Dada', likes: 20},
        ],
        newPostElement: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dmitry', image: 'avatar3.png'},
            {id: 2, name: 'Andrey', image: 'avatar3.png'},
            {id: 3, name: 'Sveta', image: 'avatar3.png'},
            {id: 4, name: 'Sasha', image: 'avatar3.png'},
            {id: 5, name: 'Valera', image: 'avatar3.png'},
            {id: 6, name: 'Viktor', image: 'avatar3.png'},
        ],
        messages: [
            {id: 1, message: 'Hello...'},
            {id: 2, message: 'Hi...'},
            {id: 3, message: 'How are you?...'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yoyo'},
        ],
        newMessageElement: ''
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrey', image: 'avatar3.png'},
            {id: 2, name: 'Sasha', image: 'avatar3.png'},
            {id: 3, name: 'Sveta', image: 'avatar3.png'},
        ],
    }
}

export const addPost = (postText: string) => {
    const newPost: MessageType = {id: 5, message: postText, likes: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
    state.profilePage.newPostElement = ''
}
export const changeNewPostText = (postText: string) => {
    state.profilePage.newPostElement = postText
    rerenderEntireTree(state)
}

export const addMessage = (messageText: string) => {
    const newMessage: MessagesType = {id: 6, message: messageText}
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state)
    state.dialogsPage.newMessageElement = ''
}
export const changeNewMessageText = (messageText: string) => {
    state.dialogsPage.newMessageElement = messageText
    rerenderEntireTree(state)
}

