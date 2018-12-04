import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import { loadStories } from './actions/topActions';
import { loadNewStories } from './actions/newActions';
import { commentContainer, fetchAllComments } from './actions/commentActions';

const store = configureStore();
// we load the initial render for all the get method here
store.dispatch(loadStories()); 
store.dispatch(loadNewStories());
store.dispatch(fetchAllComments());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>    
    </Provider>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
