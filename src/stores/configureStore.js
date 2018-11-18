import { createStore } from 'redux';
import rootReducers from '../reducers'
import { applyMiddleware } from '../../../../../Library/Caches/typescript/3.1/node_modules/redux';
import thunk from 'redux-thunk';

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];


export default function configureStore(intialState) {
    return createStore (
        rootReducers,
        intialState,
        applyMiddleware(...middleware)
    );
}