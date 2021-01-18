import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducers';
import { statusesReducer } from './statusesReducer';
import { quizReducer } from './quizReducer';
import { toastReducer } from './toastReducer';


const rootReducer = combineReducers({
    statuses: statusesReducer,
    session: sessionReducer,
    quizzes: quizReducer,
    toast: toastReducer,
});

export default rootReducer;

