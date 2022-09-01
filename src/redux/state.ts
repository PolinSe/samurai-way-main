import {ProfileActionTypes, profileReducer} from './profileReducer';
import {DialogsActionTypes, dialogsReducer} from './dialogsReducer';

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

export type ActionTypes = ProfileActionTypes | DialogsActionTypes

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export const store: StoreType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    subscribe(callback: any) {
        this._callSubscriber = callback
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber()
    }
}
