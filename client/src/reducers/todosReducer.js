import {
    CREATE_TODO,
    DELETE_TODO,
    FETCH_TODOS,
    FETCH_TODO
} from '../actions/types';
import _ from 'lodash';

const todosReducer=(state={},action)=>{
    switch(action.type){
        case CREATE_TODO:
            return {...state,[action.payload.id]:action.payload}
        case FETCH_TODOS:
            return {...state,...action.payload};
        case FETCH_TODO:
            return {...state,[action.payload.id]:action.payload};
        case DELETE_TODO:
            return _.omit(state,action.payload);
        default:
            return state;
    }
}

export default todosReducer;