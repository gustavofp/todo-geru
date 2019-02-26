import { combineReducers } from 'redux';

import { toastsReducer as toasts } from 'react-toastify-redux';
import todos from './todos';

export default combineReducers({
    toasts,
    todos
});
