import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {joinServer} from './actions/server_actions';
import { createChannel, fetchServerChannels } from './actions/channel_actions';
import { fetchChannelMessages } from './actions/message_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;

    // Test stuff remove later
    window.joinServer = joinServer;
    window.createChannel = createChannel;
    window.fetchServerChannels = fetchServerChannels;
    window.fetchChannelMessages = fetchChannelMessages;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store}/>, root);
});
