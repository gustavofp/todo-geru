import { TODOS_FETCH_STARTED, TODOS_FETCH_SUCCESS, TODOS_FETCH_ERROR, FILTER_CHANGED } from '../actions/todos';
const INITIAL_STATE = {
    data: [],
    error: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TODOS_FETCH_STARTED:
            return { ...state }
        case TODOS_FETCH_SUCCESS:
            return { ...state, data: action.payload }
        case TODOS_FETCH_ERROR:
            return { ...state, error: action.payload }
        case FILTER_CHANGED: 
            return { ...state, data: action.payload }
        default:
            return { ...state }

    }

}