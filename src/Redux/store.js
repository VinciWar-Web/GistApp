import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import { getAllGistPublicReducer } from './Reducers/gistPublicReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    gistPublic: getAllGistPublicReducer,
})

export const store = createStore( 
    reducers,
    composeEnhancers(applyMiddleware( thunk ))
)

