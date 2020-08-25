import * as ActionTypes from './ActionTypes';

export const addPost = (title, post)=>({
    type:ActionTypes.ADD_POST,
    payload:{
        title:title,
        post:post
    }
});