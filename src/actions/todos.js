import axios from 'axios';
import config from '../';

export const TODOS_FETCH_STARTED = 'TODOS_FETCH_STARTED';
export const TODOS_FETCH_SUCCESS = 'TODOS_FETCH_SUCCESS';
export const TODOS_FETCH_ERROR = 'TODOS_FETCH_ERROR';
export const fetchTodos = () => (dispatch) => {
    dispatch({ type: TODOS_FETCH_STARTED });

    axios.get(`${config.API}`)
        .then((res) => {
            dispatch({
                type: TODOS_FETCH_SUCCESS,
                payload: res
            })
        })
        .catch((err) => {
            dispatch({
                type: TODOS_FETCH_ERROR,
                payload: err
            })
        })
}

