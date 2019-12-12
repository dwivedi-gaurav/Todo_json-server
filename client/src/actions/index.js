import axios from 'axios';
import history from '../history';
import _ from 'lodash';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TODO,
    DELETE_TODO,
    FETCH_TODOS,
    FETCH_TODO
} from './types';

export const signIn=(userId)=>{
    return {
        type: SIGN_IN,
        payload:userId
    }
}
export const signOut=()=>{
    return {
        type:SIGN_OUT
    }
}

export const createTodo=(todo)=>{
    return async (dispatch,getState)=>{
        const response=await axios.post('http://localhost:3001/todos',{...todo,userId:getState().auth.userId});
        dispatch({
            type:CREATE_TODO,
            payload:response.data
        });
        history.push('/');
    }
}

export const fetchTodos=()=>{
    return async (dispatch)=>{
        const response=await axios.get('http://localhost:3001/todos');
        dispatch({
            type:FETCH_TODOS,
            payload:_.mapKeys(response.data,'id')
        });
    }
}

export const fetchTodo=(id)=>{
    return async (dispatch)=>{
        const response=await axios.get(`http://localhost:3001/todos/${id}`);
        dispatch({
            type:FETCH_TODO,
            payload:response.data
        });
    }
}

export const editTodo=(todo,id)=>{
    return async (dispatch)=>{
        await axios.patch(`http://localhost:3001/todos/${id}`,todo);
        history.push('/');
    }
}

export const deleteTodo=(id)=>{
    return async (dispatch)=>{
        await axios.delete(`http://localhost:3001/todos/${id}`);
        dispatch({
            type:DELETE_TODO,
            payload:id
        });
        history.push('/');
    }
}

