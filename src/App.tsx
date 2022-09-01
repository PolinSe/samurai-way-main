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
    debugger
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <Dialogs    // передали весь стор
                           store={props.store}
                       />}
                />
                <Route path={'/profile'}
                       render={() => <Profile    // передали только нужную часть стора - это предпочтительнее
                           posts={state.profilePage.posts}
                           newPostElement={state.profilePage.newPostElement}
                           dispatch={props.store.dispatch.bind(props.store)} // важно не забыть bind, если передаем метод объекта вне объекта
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
