import {createStore, combineReducers} from 'redux';
import { Posts } from './posts'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            posts: Posts
        })
    );

    return store;
}