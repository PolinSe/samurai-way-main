import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, changeNewMessageText, changeNewPostText, StateType} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewPostText={changeNewPostText}
                addMessage={addMessage}
                changeNewMessageText={changeNewMessageText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}