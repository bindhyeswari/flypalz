
import { combineReducers } from 'redux';

function data(initialState = {
    info: 'Hello World'
}, action) {
    switch (action.type) {
        default:
            return initialState;
    }
}

const reducers = combineReducers({ data });

export default function rootReducer(state = {}, action) {
    const reducedState = reducers(state, action);
    let newState = null;

    switch (action.type) {
        default:
            return reducedState;
    }
}
