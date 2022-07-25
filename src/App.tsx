import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StoreType} from './redux/state';

type AppType = {
    store: StoreType
}
const App: React.FC<AppType> = (props) => {

    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           dialogsPage={state.dialogsPage}
                           addMessage={props.store.addMessage.bind(props.store)}
                           changeNewMessageText={props.store.changeNewMessageText.bind(props.store)}
                       />}
                />
                <Route path={'/profile'}
                       render={() => <Profile
                           profilePage={state.profilePage}
                           addPost={props.store.addPost.bind(props.store)}
                           changeNewPostText={props.store.changeNewPostText.bind(props.store)}
                       />}
                />
                {/*<Route path={'/news'} render={() => <News/>}/>*/}
                {/*<Route path={'/music'} render={() => <Music/>}/>*/}
                {/*<Route path={'/settings'} render={() => <Settings/>}/>*/}
            </div>
        </div>
    );
}

export default App;
