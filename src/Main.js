import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import NewContainer from './NewContainer';
import ShowContainer from './ShowContainer';
import AskContainer from './AskContainer';
import CommentContainer from './CommentContainer';
import JobsContainer from './JobsContainer';
import TopContainer from './TopContainer';
import Item from './Item';

export const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={TopContainer}/>
            <Route exact path="/new" component={NewContainer}/>
            <Route exact path="/item" component={Item}/>
            <Route exact path="/comment" component={CommentContainer}/>
            <Route exact path="/show" component={ShowContainer}/>
            <Route exact path="/ask" component={AskContainer}/>
            <Route exact path="/jobs" component={JobsContainer}/>
        </Switch>
    )

}

export default Main;