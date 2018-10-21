import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import New from './New';
import Show from './Show';
import Ask from './Ask';
import Comment from './Comment';
import Jobs from './Jobs';

export const Main = () => {
    return (
        <Switch>
            <Route exact path="/new" component={New}/>
            <Route exact path="/comment" component={Comment}/>
            <Route exact path="/show" component={Show}/>
            <Route exact path="/ask" component={Ask}/>
            <Route exact path="/jobs" component={Jobs}/>
        </Switch>
    )

}

export default Main;