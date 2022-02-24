import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { weatherReducer } from './reducers/weatherReducer';

const rootReducer = combineReducers({
    weatherReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


store.subscribe(() => {
    console.log('Global state is:', store.getState())
})
