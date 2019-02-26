import axios from 'axios';
import config from '../config';

export const TODOS_FETCH_STARTED = 'TODOS_FETCH_STARTED';
export const TODOS_FETCH_SUCCESS = 'TODOS_FETCH_SUCCESS';
export const TODOS_FETCH_ERROR = 'TODOS_FETCH_ERROR';
export const fetchTodos = () => (dispatch) => {
    dispatch({ type: TODOS_FETCH_STARTED });

    axios.get(`${config.API}/api/todos`)
        .then((res) => {
            dispatch({
                type: TODOS_FETCH_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: TODOS_FETCH_ERROR,
                payload: err
            })
        })
}

export const ADD_TODO_STARTED = 'ADD_TODO_STARTED';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const addTodo = (data) => (dispatch) => {
    dispatch({ type: ADD_TODO_STARTED });

    axios.post(`${config.API}/api/todos`, data)
        .then((res) => {
            dispatch({ type: ADD_TODO_SUCCESS });
        })
        .catch((err) => {
            dispatch({ type: ADD_TODO_ERROR });
        })  

}

export const FILTER_CHANGED = 'FILTER_CHANGED';
export const filterChanged = (rawData, filters) => (dispatch) => {
    const data = []

    dispatch({
        type: FILTER_CHANGED,
        payload: data
    })

}
