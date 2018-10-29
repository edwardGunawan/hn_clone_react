import React, { Component } from 'react';

import Lists from './Lists';

import {withRouter} from 'react-router-dom';

import NewStoryApi from './api/mockNewStoriesApi';

export class NewContainer extends Component {
    constructor(props) {
        super(props);

        this.fetchAllStories = this.fetchAllStories.bind(this);
        this.state = {
            news: [],
        }
    }

    componentDidMount(){
        this.fetchAllStories();
    }

    fetchAllStories() {
        NewStoryApi.getAllStories()
            .then((ids) => {
                return NewStoryApi.getItems(ids);
            })
            .then((newsItem) => {
                //console.log('in New.js ', newsItem);
                this.setState({ news: newsItem });
            })
            .catch(e => console.log("error in fetchAllStories", e));
    }
    
    render() {
        const {news} = this.state;
        return (
            <div>
                <Lists news={news}/>
            </div>
        )
    }
}

export default withRouter(NewContainer);