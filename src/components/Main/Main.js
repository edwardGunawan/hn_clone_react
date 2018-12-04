import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import NewContainer from '../NewContainer/NewContainer';
import ShowContainer from '../ShowContainer/ShowContainer';
import CommentContainer from '../CommentContainer/CommentContainer';
import TopContainer from '../TopContainer/TopContainer';
import Item from '../Item/Item';

// https://stackoverflow.com/questions/47804798/how-to-re-render-the-same-component-being-used-in-different-routes
// NOTE: key value in re-render same component in 2 router, but usually use HOC to pass in the data and render that data
export const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={TopContainer}/>
            <Route exact path="/new" component={NewContainer}/>
            <Route exact key={123} path="/item" component={Item}/>
            <Route exact path="/comment" component={CommentContainer}/>
            <Route exact key={2344} path="/comment/detail" component={Item}/>
            <Route exact path="/show" component={ShowContainer}/>
        </Switch>
    )

}

export default Main;