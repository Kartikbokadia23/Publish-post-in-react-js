import { POSTS } from '../shared/post';
import * as ActionTypes from './ActionTypes';


export const Posts = (state=POSTS,action)=>{
    switch (action.type){
        case ActionTypes.ADD_POST:
            var post = action.payload;
            post.id = state.length;
            //post.date = new Date().toISOString();
            //console.log("state: ", state);
            return state.concat(post)

        default:
          return state;
    }
}